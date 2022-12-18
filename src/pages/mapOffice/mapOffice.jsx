import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { getUsers } from '../../store/usersSlice';

import { places } from '../../data/places';
import MapSpot from '../../components/mapSpot/MapSpot';
import officeImg from '../../assets/office.jpg';
import 'react-indiana-drag-scroll/dist/style.css';
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
			<div className={styles.Schema}>
				<div className={styles.gradeTop}>
					<div className={`${styles.Table} ${styles.boss1}`}></div>
					<div className={`${styles.Table} ${styles.boss2}`}></div>
				</div>

				<div className={styles.gradeA}>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
						<div className={`${styles.Table} ${styles.quadro5}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
						<div className={`${styles.Table} ${styles.quadro5}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.triple}>
						<div className={`${styles.Table} ${styles.triple1}`}></div>
						<div className={`${styles.Table} ${styles.triple2}`}></div>
						<div className={`${styles.Table} ${styles.triple3}`}></div>
						<div className={`${styles.Table} ${styles.triple4}`}></div>
						<div className={`${styles.Table} ${styles.triple5}`}></div>
						<div className={`${styles.Table} ${styles.triple6}`}></div>
					</div>
					<div className={styles.triple}>
						<div className={`${styles.Table} ${styles.triple1}`}></div>
						<div className={`${styles.Table} ${styles.triple2}`}></div>
						<div className={`${styles.Table} ${styles.triple3}`}></div>
						<div className={`${styles.Table} ${styles.triple4}`}></div>
						<div className={`${styles.Table} ${styles.triple5}`}></div>
						<div className={`${styles.Table} ${styles.triple6}`}></div>
					</div>
					<div className={styles.triple}>
						<div className={`${styles.Table} ${styles.triple1}`}></div>
						<div className={`${styles.Table} ${styles.triple2}`}></div>
						<div className={`${styles.Table} ${styles.triple3}`}></div>
						<div className={`${styles.Table} ${styles.triple4}`}></div>
						<div className={`${styles.Table} ${styles.triple5}`}></div>
						<div className={`${styles.Table} ${styles.triple6}`}></div>
					</div>
					<div className={styles.triple}>
						<div className={`${styles.Table} ${styles.triple1}`}></div>
						<div className={`${styles.Table} ${styles.triple2}`}></div>
						<div className={`${styles.Table} ${styles.triple3}`}></div>
						<div className={`${styles.Table} ${styles.triple4}`}></div>
						<div className={`${styles.Table} ${styles.triple5}`}></div>
						<div className={`${styles.Table} ${styles.triple6}`}></div>
					</div>
				</div>
				<div className={styles.gradeB}>
					<div className={styles.duo}>
						<div className={`${styles.Table} ${styles.duo1}`}></div>
						<div className={`${styles.Table} ${styles.duo2}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
				</div>
				<div className={styles.gradeC}>
					<div className={styles.duo}>
						<div className={`${styles.Table} ${styles.duo1}`}></div>
						<div className={`${styles.Table} ${styles.duo2}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
					<div className={styles.quadro}>
						<div className={`${styles.Table} ${styles.quadro1}`}></div>
						<div className={`${styles.Table} ${styles.quadro2}`}></div>
						<div className={`${styles.Table} ${styles.quadro3}`}></div>
						<div className={`${styles.Table} ${styles.quadro4}`}></div>
					</div>
				</div>
				<div className={styles.gradeD}>
					<div className={styles.eight}>
						<div className={`${styles.Table} ${styles.eight1}`}></div>
						<div className={`${styles.Table} ${styles.eight2}`}></div>
						<div className={`${styles.Table} ${styles.eight3}`}></div>
						<div className={`${styles.Table} ${styles.eight4}`}></div>
						<div className={`${styles.Table} ${styles.eight5}`}></div>
						<div className={`${styles.Table} ${styles.eight6}`}></div>
						<div className={`${styles.Table} ${styles.eight7}`}></div>
						<div className={`${styles.Table} ${styles.eight8}`}></div>
					</div>
				</div>
				<div className={styles.gradeE}>
					<div className={styles.ten}>
						<div className={`${styles.Table} ${styles.ten1}`}></div>
						<div className={`${styles.Table} ${styles.ten2}`}></div>
						<div className={`${styles.Table} ${styles.ten3}`}></div>
						<div className={`${styles.Table} ${styles.ten4}`}></div>
						<div className={`${styles.Table} ${styles.ten5}`}></div>
						<div className={`${styles.Table} ${styles.ten6}`}></div>
						<div className={`${styles.Table} ${styles.ten7}`}></div>
						<div className={`${styles.Table} ${styles.ten8}`}></div>
						<div className={`${styles.Table} ${styles.ten9}`}></div>
						<div className={`${styles.Table} ${styles.ten10}`}></div>
					</div>
				</div>
				<div className={styles.gradeF}>
					<div className={styles.ten}>
						<div className={`${styles.Table} ${styles.ten1}`}></div>
						<div className={`${styles.Table} ${styles.ten2}`}></div>
						<div className={`${styles.Table} ${styles.ten3}`}></div>
						<div className={`${styles.Table} ${styles.ten4}`}></div>
						<div className={`${styles.Table} ${styles.ten5}`}></div>
						<div className={`${styles.Table} ${styles.ten6}`}></div>
						<div className={`${styles.Table} ${styles.ten7}`}></div>
						<div className={`${styles.Table} ${styles.ten8}`}></div>
						<div className={`${styles.Table} ${styles.ten9}`}></div>
						<div className={`${styles.Table} ${styles.ten10}`}></div>
					</div>
				</div>
				<div className={styles.gradeG}>
					<div className={styles.five}>
						<div className={`${styles.Table} ${styles.five1}`}></div>
						<div className={`${styles.Table} ${styles.five2}`}></div>
						<div className={`${styles.Table} ${styles.five3}`}></div>
						<div className={`${styles.Table} ${styles.five4}`}></div>
						<div className={`${styles.Table} ${styles.five5}`}></div>
					</div>
				</div>
			</div>
			{/* <ScrollContainer>
				<img className={styles.Img} src={officeImg} alt='office' />
			</ScrollContainer> */}
			{/* {places.map((place) => (
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
			)} */}
		</div>
	);
};

export default MapOffice;
