import { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageUploader', ImageUploader);

const Editor = () => {
	const editorEl = useRef(null);

	const handleChange = () => {
		console.log(editorEl.current.value);
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
		toolbar: fullToolbarOptions,
		imageUploader: {
			upload: (file) => {
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
						})
						.catch((error) => {
							reject('Upload failed');
							console.error('Error:', error);
						});
				});
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

	return <ReactQuill theme='snow' ref={editorEl} modules={modules} formats={formats} onChange={handleChange} />;
};

export default Editor;
