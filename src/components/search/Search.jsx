import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Highlighter from 'react-highlight-words';
import axios from '../../axios';
import styles from './Search.module.css';

const Search = () => {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const [data, setData] = useState([]);
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/?q=${query}`);
			const filteredPosts = data.filter((post) => user.departments.includes(post.department));
			setData(filteredPosts);
		};
		if (query.length > 2) {
			fetchData();
		} else {
			setData([]);
		}
	}, [query]);

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
					disabled={Object.keys(user).length === 0}
					onFocus={() => setIsFocused(true)}
				/>
			</div>
			{isFocused && (
				<div className={styles.SearchResults}>
					<div className='search-results-container'>
						<div className={styles.SearchResultsItems}>
							{data &&
								data.map((item) => (
									<div key={item._id}>
										<Highlighter highlightClassName='YourHighlightClass' searchWords={[query]} autoEscape={true} textToHighlight={item.title} />
										<Highlighter highlightClassName='YourHighlightClass' searchWords={[query]} autoEscape={true} textToHighlight={item.body} />
									</div>
								))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Search;
