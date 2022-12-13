import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Highlighter from 'react-highlight-words';
import axios from '../../axios';
import styles from './Search.module.css';

const Search = () => {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const [data, setData] = useState([]);
	const user = useSelector((state) => state.user.user);

	const hideSearchResults = () => {
		setQuery('');
		setIsFocused(false);
	};

	const handleClick = (e) => {
		e.stopPropagation();
	};

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/?q=${query}`);
			const filteredPosts = data.filter((post) => user.departments.includes(post.department));
			const mapedPosts = filteredPosts.map((post) => {
				const index = post.body.indexOf(query);
				if (index - 50 < 0) {
					post.body = `${post.body.slice(0, index + 80)}...`;
				} else if (index + 50 > post.body.length) {
					post.body = `...${post.body.slice(index - 50)}`;
				} else {
					post.body = `...${post.body.slice(index - 50, index + 50)}...`;
				}
				return post;
			});
			setData(mapedPosts);
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
					onChange={(e) => setQuery(e.target.value)}
					disabled={Object.keys(user).length === 0}
					onFocus={() => setIsFocused(true)}
					value={query}
				/>
			</div>
			{isFocused && (
				<div className={styles.SearchResults} onClick={hideSearchResults}>
					<div className={styles.SearchResultsContainer} onClick={handleClick}>
						<div className={styles.SearchResultsItems}>
							{data &&
								data.map((item) => (
									<Link to={`/${item.department}/${item._id}`} key={item._id} onClick={hideSearchResults} state={{ query }}>
										<Highlighter highlightClassName='YourHighlightClass' searchWords={[query]} autoEscape={true} textToHighlight={item.title} />
										<Highlighter highlightClassName='YourHighlightClass' searchWords={[query]} autoEscape={true} textToHighlight={item.body} />
									</Link>
								))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Search;
