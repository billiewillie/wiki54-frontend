import { useEffect, useState } from "react";
import axios from "../../axios";

const Search = () => {
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/post`);
			setData(data);
		};
		if (query.length === 0 || query.length > 2) fetchData();
	}, [query]);

	return (
		<>
			<div className='search'>
				<input className='search' placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
			</div>
			<div className='search-results'>
				<div className='search-results-container'>
					<div className='search-results-items'>
						{data.map((item) => (
							<div key={item.id}>
								<div>{item.first_name}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
