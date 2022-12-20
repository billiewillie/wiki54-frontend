import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import styles from './EditorPage.module.css';

import { editPost } from '../../store/postSlice';

Quill.register('modules/imageResize', ImageResize);

const EditorPage = () => {
	const { department, id } = useParams();
	const dispatch = useDispatch();
	const editorRef = useRef(null);
	const titleRef = useRef(null);
	let navigate = useNavigate();

	const [post] = useSelector((state) => state.posts.posts.filter((post) => post._id === id));

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
		const elements = Array.from(document.querySelectorAll('h2'));
		elements.forEach((element) => {
			element.setAttribute('id', `id${(Math.random() + 1).toString(36).substring(7)}`);
		});
		const content = document.querySelector('.ql-editor').innerHTML;
		dispatch(
			editPost({
				id,
				department,
				title: titleRef.current.value,
				body: content,
				tags: [],
			})
		);
		navigate(`/${department}`);
	};

	const modules = {
		toolbar: {
			container: [
				[{ header: [2, false] }],
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
		<div className={styles.EditPost}>
			{post && <input type='text' defaultValue={post.title} ref={titleRef} placeholder='Введите заголовок' />}
			{post && <ReactQuill ref={editorRef} value={post.body} theme='snow' modules={modules} formats={formats} />}
			<button onClick={buttonHandler} className={styles.EditPostButton}>
				Сохранить
			</button>
		</div>
	);
};

export default EditorPage;
