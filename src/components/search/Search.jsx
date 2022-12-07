import { useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import axios from '../../axios';
import styles from './Search.module.css';

const Search = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/?q=${query}`);
			setData(data);
		};
		if (query.length > 2) {
			fetchData();
		} else setData([]);
	}, [query]);

	console.log(data);

	return (
		<>
			<div className={styles.Search}>
				<input
					type='text'
					className='search'
					autoComplete='false'
					placeholder='мин 3 символа'
					aria-autocomplete='false'
					onChange={(e) => setQuery(e.target.value.toLowerCase())}
				/>
			</div>
			<div className={styles.SearchResults}>
				<div className='search-results-container'>
					<div className='search-results-items'>
						{data &&
							data.map((item) => (
								<div key={item._id}>
									<div>{item.title}</div>
									<div>{item.body}</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
