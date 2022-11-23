import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ data }) => {
	const editorRef = useRef(null);
	console.log(data);

	const imageHandler = (a) => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		input.onchange = () => {
			const file = input.files[0];

			if (/^image\//.test(file.type)) {
				saveToServer(file);
			} else {
				alert('You could only upload images.');
			}
		};
	};

	const saveToServer = (file) => {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			formData.append('image', file);

			fetch('http://localhost:4444/upload', {
				method: 'POST',
				body: formData,
			})
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					resolve(`http://localhost:4444${result.url}`);
					insertToEditor(`http://localhost:4444${result.url}`);
				})
				.catch((error) => {
					reject('Upload failed');
					console.error('Error:', error);
				});
		});
	};

	const insertToEditor = (imageUrl) => {
		// TODO: get current cursor position and embed there
		editorRef.current.getEditor().insertEmbed(null, 'image', imageUrl);
		// console.log(editorRef.current);
	};

	const fullToolbarOptions = [
		[{ header: [1, 2, 3, false] }],
		['bold', 'italic', 'underline', 'strike'],
		[{ color: ['red', 'green', 'blue', 'orange', 'violet', 'white', false] }, { background: [] }],
		[{ script: 'sub' }, { script: 'super' }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ align: ['right', 'center', 'justify'] }],
		['link', 'image', 'video'],
	];

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, false] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }],
				['image'],
			],

			handlers: {
				image: imageHandler,
			},
		},
	};

	const formats = [
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'color',
		'background',
		'script',
		'header',
		'blockquote',
		'code-block',
		'indent',
		'list',
		'direction',
		'align',
		'link',
		'image',
		'video',
	];

	const showEditor = () => {
		console.log(editorRef.current.value);
	};

	return (
		<>
			<ReactQuill ref={editorRef} defaultValue={data.body} theme='snow' modules={modules} formats={formats} onChange={showEditor} />
		</>
	);
};

export default Editor;
