import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/usersSlice';

import { places } from '../../data/places';
import MapSpot from '../../components/mapSpot/MapSpot';
import officeImg from '../../assets/office.jpg';
import styles from './MapOffice.module.css';

const MapOffice = () => {
	const [user, setUser] = useState(null);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const clickHandler = (line, place) => {
		const [user] = users.filter((user) => user.line === line && user.place === place);
		setUser(user);

		if (user === undefined) setUser(null);
	};

	return (
		<div className={styles.MapOffice}>
			<img className={styles.Img} src={officeImg} alt='office' />
			{places.map((place) => (
				<MapSpot key={place.id} clickHandler={clickHandler} place={place} />
			))}
			{user && (
				<div className={styles.Card}>
					<img src={user.photo} alt='' />
					<p>{user.firstName}</p>
					<p>{user.lastName}</p>
					<p>отдел {user.departments[0]}</p>
					<p>ряд {user.line}</p>
					<p>место {user.place}</p>
				</div>
			)}
		</div>
	);
};

export default MapOffice;
