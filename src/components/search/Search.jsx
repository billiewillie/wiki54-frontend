import { useEffect, useState } from "react";
import axios from "../../axios";

const Search = () => {
	const [query, setQuery] = useState("");
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

	return (
		<>
			<div className='search'>
				<input className='search' placeholder='мин 3 символа' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
			</div>
			<div className='search-results'>
				<div className='search-results-container'>
					<div className='search-results-items'>
						{data &&
							data.map((item) => (
								<div key={item.id} style={{ display: "flex", columnGap: "10px" }}>
									<div>{item.name}</div>
									<div>{item.surname}</div>
									<div>{item.email}</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
