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
	const [isScaled, setIsScaled] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const clickHandler = (id) => {
		const [user] = users.filter((user) => user.placeId === id);
		setUser(user);
	};

	const scaleMap = () => {
		setIsScaled(!isScaled);
	};

	return (
		<div className={styles.MapOffice}>
			<ScrollContainer style={{ width: '100%', height: '100%' }}>
				<div className={`${isScaled ? styles.SchemaScaled : styles.Schema}`}>
					<div className={styles.gradeTop}>
						<div className={`${styles.Table} ${styles.boss1}`} id='place100/1'>
							<MapSpot clickHandler={clickHandler} id='place100/1' />
						</div>
						<div className={`${styles.Table} ${styles.boss2}`} id='place100/2'>
							<MapSpot clickHandler={clickHandler} id='place100/2' />
						</div>
					</div>
					<div className={styles.gradeA}>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place24/3'>
								<MapSpot clickHandler={clickHandler} id='place24/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place24/4'>
								<MapSpot clickHandler={clickHandler} id='place24/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place24/1'>
								<MapSpot clickHandler={clickHandler} id='place24/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place24/2'>
								<MapSpot clickHandler={clickHandler} id='place24/2' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place23/1'>
								<MapSpot clickHandler={clickHandler} id='place23/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place23/4'>
								<MapSpot clickHandler={clickHandler} id='place23/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place23/3'>
								<MapSpot clickHandler={clickHandler} id='place23/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place23/2'>
								<MapSpot clickHandler={clickHandler} id='place23/2' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place22/1'>
								<MapSpot clickHandler={clickHandler} id='place22/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place22/2'>
								<MapSpot clickHandler={clickHandler} id='place22/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place22/3'>
								<MapSpot clickHandler={clickHandler} id='place22/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place22/4'>
								<MapSpot clickHandler={clickHandler} id='place22/4' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place21/3'>
								<MapSpot clickHandler={clickHandler} id='place21/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place21/4'>
								<MapSpot clickHandler={clickHandler} id='place21/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place21/1'>
								<MapSpot clickHandler={clickHandler} id='place21/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place21/2'>
								<MapSpot clickHandler={clickHandler} id='place21/2' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place20/1'>
								<MapSpot clickHandler={clickHandler} id='place20/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place20/2'>
								<MapSpot clickHandler={clickHandler} id='place20/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place20/3'>
								<MapSpot clickHandler={clickHandler} id='place20/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place20/4'>
								<MapSpot clickHandler={clickHandler} id='place20/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro5}`} id='place20/5'>
								<MapSpot clickHandler={clickHandler} id='place20/5' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place19/1'>
								<MapSpot clickHandler={clickHandler} id='place19/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place19/2'>
								<MapSpot clickHandler={clickHandler} id='place19/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place19/3'>
								<MapSpot clickHandler={clickHandler} id='place19/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place19/4'>
								<MapSpot clickHandler={clickHandler} id='place19/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro5}`} id='place19/5'>
								<MapSpot clickHandler={clickHandler} id='place19/5' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place18/1'>
								<MapSpot clickHandler={clickHandler} id='place18/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place18/2'>
								<MapSpot clickHandler={clickHandler} id='place18/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place18/3'>
								<MapSpot clickHandler={clickHandler} id='place18/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place18/4'>
								<MapSpot clickHandler={clickHandler} id='place18/4' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place17/1'>
								<MapSpot clickHandler={clickHandler} id='place17/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place17/2'>
								<MapSpot clickHandler={clickHandler} id='place17/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place17/3'>
								<MapSpot clickHandler={clickHandler} id='place17/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place17/4'>
								<MapSpot clickHandler={clickHandler} id='place17/4' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place18/1'>
								<MapSpot clickHandler={clickHandler} id='place18/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place18/2'>
								<MapSpot clickHandler={clickHandler} id='place18/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place18/3'>
								<MapSpot clickHandler={clickHandler} id='place18/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place18/4'>
								<MapSpot clickHandler={clickHandler} id='place18/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place18/5'>
								<MapSpot clickHandler={clickHandler} id='place18/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place18/6'>
								<MapSpot clickHandler={clickHandler} id='place18/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place17/1'>
								<MapSpot clickHandler={clickHandler} id='place17/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place17/2'>
								<MapSpot clickHandler={clickHandler} id='place17/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place17/3'>
								<MapSpot clickHandler={clickHandler} id='place17/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place17/4'>
								<MapSpot clickHandler={clickHandler} id='place17/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place17/5'>
								<MapSpot clickHandler={clickHandler} id='place17/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place17/6'>
								<MapSpot clickHandler={clickHandler} id='place17/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place16/1'>
								<MapSpot clickHandler={clickHandler} id='place16/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place16/2'>
								<MapSpot clickHandler={clickHandler} id='place16/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place16/3'>
								<MapSpot clickHandler={clickHandler} id='place16/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place16/4'>
								<MapSpot clickHandler={clickHandler} id='place16/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place16/5'>
								<MapSpot clickHandler={clickHandler} id='place16/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place16/6'>
								<MapSpot clickHandler={clickHandler} id='place16/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place15/1'>
								<MapSpot clickHandler={clickHandler} id='place15/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place15/2'>
								<MapSpot clickHandler={clickHandler} id='place15/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place15/3'>
								<MapSpot clickHandler={clickHandler} id='place15/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place15/4'>
								<MapSpot clickHandler={clickHandler} id='place15/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place15/5'>
								<MapSpot clickHandler={clickHandler} id='place15/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place15/6'>
								<MapSpot clickHandler={clickHandler} id='place15/6' />
							</div>
						</div>
					</div>
					<div className={styles.gradeB}>
						<div className={styles.duo}>
							<div className={`${styles.Table} ${styles.duo1}`} id='place29/2'>
								<MapSpot clickHandler={clickHandler} id='place29/2' />
							</div>
							<div className={`${styles.Table} ${styles.duo2}`} id='place29/1'>
								<MapSpot clickHandler={clickHandler} id='place29/1' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='30/3'>
								<MapSpot clickHandler={clickHandler} id='place30/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='30/4'>
								<MapSpot clickHandler={clickHandler} id='place30/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='30/1'>
								<MapSpot clickHandler={clickHandler} id='place30/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='30/2'>
								<MapSpot clickHandler={clickHandler} id='place30/2' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='31/3'>
								<MapSpot clickHandler={clickHandler} id='place31/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='31/4'>
								<MapSpot clickHandler={clickHandler} id='place31/4' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='31/1'>
								<MapSpot clickHandler={clickHandler} id='place31/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='31/2'>
								<MapSpot clickHandler={clickHandler} id='place31/2' />
							</div>
						</div>
					</div>
					<div className={styles.gradeC}>
						<div className={styles.duo}>
							<div className={`${styles.Table} ${styles.duo1}`} id='place18/1'>
								<MapSpot clickHandler={clickHandler} id='place18/1' />
							</div>
							<div className={`${styles.Table} ${styles.duo2}`} id='place18/2'>
								<MapSpot clickHandler={clickHandler} id='place18/2' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place17/1'>
								<MapSpot clickHandler={clickHandler} id='place17/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place17/2'>
								<MapSpot clickHandler={clickHandler} id='place17/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place17/3'>
								<MapSpot clickHandler={clickHandler} id='place17/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place17/4'>
								<MapSpot clickHandler={clickHandler} id='place17/4' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place16/1'>
								<MapSpot clickHandler={clickHandler} id='place16/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place16/2'>
								<MapSpot clickHandler={clickHandler} id='place16/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place16/3'>
								<MapSpot clickHandler={clickHandler} id='place16/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place16/4'>
								<MapSpot clickHandler={clickHandler} id='place16/4' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place15/1'>
								<MapSpot clickHandler={clickHandler} id='place16/5' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place15/2'>
								<MapSpot clickHandler={clickHandler} id='place16/5' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place15/3'>
								<MapSpot clickHandler={clickHandler} id='place16/5' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place15/4'>
								<MapSpot clickHandler={clickHandler} id='place16/5' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place14/1'>
								<MapSpot clickHandler={clickHandler} id='place14/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place14/2'>
								<MapSpot clickHandler={clickHandler} id='place14/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place14/3'>
								<MapSpot clickHandler={clickHandler} id='place14/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place14/4'>
								<MapSpot clickHandler={clickHandler} id='place14/4' />
							</div>
						</div>
						<div className={styles.quadro}>
							<div className={`${styles.Table} ${styles.quadro1}`} id='place13/1'>
								<MapSpot clickHandler={clickHandler} id='place13/1' />
							</div>
							<div className={`${styles.Table} ${styles.quadro2}`} id='place13/2'>
								<MapSpot clickHandler={clickHandler} id='place13/2' />
							</div>
							<div className={`${styles.Table} ${styles.quadro3}`} id='place13/3'>
								<MapSpot clickHandler={clickHandler} id='place13/3' />
							</div>
							<div className={`${styles.Table} ${styles.quadro4}`} id='place13/4'>
								<MapSpot clickHandler={clickHandler} id='place13/4' />
							</div>
						</div>
					</div>
					<div className={styles.gradeD}>
						<div className={styles.eight}>
							<div className={`${styles.Table} ${styles.eight1}`} id='place4/1'>
								<MapSpot clickHandler={clickHandler} id='place4/1' />
							</div>
							<div className={`${styles.Table} ${styles.eight2}`} id='place4/2'>
								<MapSpot clickHandler={clickHandler} id='place4/2' />
							</div>
							<div className={`${styles.Table} ${styles.eight3}`} id='place4/3'>
								<MapSpot clickHandler={clickHandler} id='place4/3' />
							</div>
							<div className={`${styles.Table} ${styles.eight4}`} id='place4/4'>
								<MapSpot clickHandler={clickHandler} id='place4/4' />
							</div>
							<div className={`${styles.Table} ${styles.eight5}`} id='place4/5'>
								<MapSpot clickHandler={clickHandler} id='place4/5' />
							</div>
							<div className={`${styles.Table} ${styles.eight6}`} id='place4/6'>
								<MapSpot clickHandler={clickHandler} id='place4/6' />
							</div>
							<div className={`${styles.Table} ${styles.eight7}`} id='place4/7'>
								<MapSpot clickHandler={clickHandler} id='place4/7' />
							</div>
							<div className={`${styles.Table} ${styles.eight8}`} id='place4/8'>
								<MapSpot clickHandler={clickHandler} id='place4/8' />
							</div>
						</div>
					</div>
					<div className={styles.gradeE}>
						<div className={styles.ten}>
							<div className={`${styles.Table} ${styles.ten1}`} id='place3/1'>
								<MapSpot clickHandler={clickHandler} id='place3/1' />
							</div>
							<div className={`${styles.Table} ${styles.ten2}`} id='place3/2'>
								<MapSpot clickHandler={clickHandler} id='place3/2' />
							</div>
							<div className={`${styles.Table} ${styles.ten3}`} id='place3/3'>
								<MapSpot clickHandler={clickHandler} id='place3/3' />
							</div>
							<div className={`${styles.Table} ${styles.ten4}`} id='place3/4'>
								<MapSpot clickHandler={clickHandler} id='place3/4' />
							</div>
							<div className={`${styles.Table} ${styles.ten5}`} id='place3/5'>
								<MapSpot clickHandler={clickHandler} id='place3/5' />
							</div>
							<div className={`${styles.Table} ${styles.ten6}`} id='place3/6'>
								<MapSpot clickHandler={clickHandler} id='place3/6' />
							</div>
							<div className={`${styles.Table} ${styles.ten7}`} id='place3/7'>
								<MapSpot clickHandler={clickHandler} id='place3/7' />
							</div>
							<div className={`${styles.Table} ${styles.ten8}`} id='place3/8'>
								<MapSpot clickHandler={clickHandler} id='place3/8' />
							</div>
							<div className={`${styles.Table} ${styles.ten9}`} id='place3/9'>
								<MapSpot clickHandler={clickHandler} id='place3/9' />
							</div>
							<div className={`${styles.Table} ${styles.ten10}`} id='place3/10'>
								<MapSpot clickHandler={clickHandler} id='place3/10' />
							</div>
						</div>
					</div>
					<div className={styles.gradeF}>
						<div className={styles.ten}>
							<div className={`${styles.Table} ${styles.ten1}`} id='place2/1'>
								<MapSpot clickHandler={clickHandler} id='place2/1' />
							</div>
							<div className={`${styles.Table} ${styles.ten2}`} id='place2/2'>
								<MapSpot clickHandler={clickHandler} id='place2/2' />
							</div>
							<div className={`${styles.Table} ${styles.ten3}`} id='place2/3'>
								<MapSpot clickHandler={clickHandler} id='place2/3' />
							</div>
							<div className={`${styles.Table} ${styles.ten4}`} id='place2/4'>
								<MapSpot clickHandler={clickHandler} id='place2/4' />
							</div>
							<div className={`${styles.Table} ${styles.ten5}`} id='place2/5'>
								<MapSpot clickHandler={clickHandler} id='place2/5' />
							</div>
							<div className={`${styles.Table} ${styles.ten6}`} id='place2/6'>
								<MapSpot clickHandler={clickHandler} id='place2/6' />
							</div>
							<div className={`${styles.Table} ${styles.ten7}`} id='place2/7'>
								<MapSpot clickHandler={clickHandler} id='place2/7' />
							</div>
							<div className={`${styles.Table} ${styles.ten8}`} id='place2/8'>
								<MapSpot clickHandler={clickHandler} id='place2/8' />
							</div>
							<div className={`${styles.Table} ${styles.ten9}`} id='place2/9'>
								<MapSpot clickHandler={clickHandler} id='place2/9' />
							</div>
							<div className={`${styles.Table} ${styles.ten10}`} id='place2/10'>
								<MapSpot clickHandler={clickHandler} id='place2/10' />
							</div>
						</div>
					</div>
					<div className={styles.gradeG}>
						<div className={styles.five}>
							<div className={`${styles.Table} ${styles.five1}`} id='place1/1'>
								<MapSpot clickHandler={clickHandler} id='place1/1' />
							</div>
							<div className={`${styles.Table} ${styles.five2}`} id='place1/2'>
								<MapSpot clickHandler={clickHandler} id='place1/2' />
							</div>
							<div className={`${styles.Table} ${styles.five3}`} id='place1/3'>
								<MapSpot clickHandler={clickHandler} id='place1/3' />
							</div>
							<div className={`${styles.Table} ${styles.five4}`} id='place1/4'>
								<MapSpot clickHandler={clickHandler} id='place1/4' />
							</div>
							<div className={`${styles.Table} ${styles.five5}`} id='place1/5'>
								<MapSpot clickHandler={clickHandler} id='place1/5' />
							</div>
						</div>
					</div>
					<div className={styles.gradeH}>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place25/1'>
								<MapSpot clickHandler={clickHandler} id='place25/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place25/2'>
								<MapSpot clickHandler={clickHandler} id='place25/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place25/3'>
								<MapSpot clickHandler={clickHandler} id='place25/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place25/4'>
								<MapSpot clickHandler={clickHandler} id='place25/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place25/5'>
								<MapSpot clickHandler={clickHandler} id='place25/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place25/6'>
								<MapSpot clickHandler={clickHandler} id='place25/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place28/1'>
								<MapSpot clickHandler={clickHandler} id='place28/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place28/2'>
								<MapSpot clickHandler={clickHandler} id='place28/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place28/3'>
								<MapSpot clickHandler={clickHandler} id='place28/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place28/4'>
								<MapSpot clickHandler={clickHandler} id='place28/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place28/5'>
								<MapSpot clickHandler={clickHandler} id='place28/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place28/6'>
								<MapSpot clickHandler={clickHandler} id='place28/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place26/1'>
								<MapSpot clickHandler={clickHandler} id='place26/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place26/2'>
								<MapSpot clickHandler={clickHandler} id='place26/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place26/3'>
								<MapSpot clickHandler={clickHandler} id='place26/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place26/4'>
								<MapSpot clickHandler={clickHandler} id='place26/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place26/5'>
								<MapSpot clickHandler={clickHandler} id='place26/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place26/6'>
								<MapSpot clickHandler={clickHandler} id='place26/6' />
							</div>
						</div>
						<div className={styles.triple}>
							<div className={`${styles.Table} ${styles.triple1}`} id='place27/1'>
								<MapSpot clickHandler={clickHandler} id='place27/1' />
							</div>
							<div className={`${styles.Table} ${styles.triple2}`} id='place27/2'>
								<MapSpot clickHandler={clickHandler} id='place27/2' />
							</div>
							<div className={`${styles.Table} ${styles.triple3}`} id='place27/3'>
								<MapSpot clickHandler={clickHandler} id='place27/3' />
							</div>
							<div className={`${styles.Table} ${styles.triple4}`} id='place27/4'>
								<MapSpot clickHandler={clickHandler} id='place27/4' />
							</div>
							<div className={`${styles.Table} ${styles.triple5}`} id='place27/5'>
								<MapSpot clickHandler={clickHandler} id='place27/5' />
							</div>
							<div className={`${styles.Table} ${styles.triple6}`} id='place27/6'>
								<MapSpot clickHandler={clickHandler} id='place27/6' />
							</div>
						</div>
					</div>
				</div>
			</ScrollContainer>
			{user && (
				<div className={styles.Card}>
					<img src={user.photo} alt='' />
					<div className={styles.about}>
						<p>
							{user.firstName} {user.lastName}
						</p>
						<p>Отдел {user.departments[0]}</p>
						<p>Должность {user.position}</p>
					</div>
				</div>
			)}
			<button className={styles.ScaleButton} onClick={scaleMap}>
				Изменить масштаб
			</button>
		</div>
	);
};

export default MapOffice;
