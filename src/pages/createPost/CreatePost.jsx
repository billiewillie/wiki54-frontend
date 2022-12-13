import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';

import { createPost } from '../../store/postSlice';

Quill.register('modules/imageResize', ImageResize);

const CreatePost = () => {
	const dispatch = useDispatch();
	const { department } = useParams();
	const editorRef = useRef(null);
	const titleRef = useRef(null);
	let navigate = useNavigate();

	const imageHandler = () => {
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
		// range - узнать положение курсора
		const range = editorRef.current.getEditorSelection().index;
		editorRef.current.getEditor().insertEmbed(range, 'image', imageUrl);
	};

	const buttonHandler = () => {
		dispatch(
			createPost({
				department,
				title: titleRef.current.value,
				body: editorRef.current.value,
				tags: [],
			})
		);
		navigate(`/${department}`);
	};

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, false] }],
				['bold', 'italic', 'underline', 'strike'],
				[{ color: ['red', 'green', 'blue', 'orange', 'violet', 'white', false] }, { background: [] }],
				[{ script: 'sub' }, { script: 'super' }],
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ align: ['right', 'center', 'justify'] }],
				['link', 'image', 'video'],
			],
			handlers: {
				image: imageHandler,
			},
		},
		imageResize: {
			parchment: Quill.import('parchment'),
			modules: ['Resize', 'DisplaySize', 'Toolbar'],
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

	return (
		<>
			<input type='text' ref={titleRef} />
			<ReactQuill ref={editorRef} theme='snow' modules={modules} formats={formats} />
			<button onClick={buttonHandler}>Сохранить</button>
		</>
	);
};

export default CreatePost;
