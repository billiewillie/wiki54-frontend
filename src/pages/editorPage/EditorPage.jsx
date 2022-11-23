import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '../../components/editor/Editor';
import axios from '../../axios';

const EditorPage = () => {
	const [data, setData] = useState(null);
	const { department, id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/${department}/${id}/edit`);
			setData(data);
		};
		fetchData();
	}, []);

	return (
		<>
			{data && <p>{data.title}</p>}
			{data && <Editor data={data} />}
		</>
	);
};

export default EditorPage;
