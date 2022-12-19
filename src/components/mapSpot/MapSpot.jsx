import { useSelector } from 'react-redux';
import styles from './MapSpot.module.css';

const MapSpot = ({ id, clickHandler }) => {
	const [user] = useSelector((state) => state.users.users.filter((user) => user.placeId === id));
	let firstLetter;
	let lastLetter;
	if (user) {
		firstLetter = user.firstName.slice(0, 1);
		lastLetter = user.lastName.slice(0, 1);
	}

	return (
		<>
			{user && (
				<div className={styles.Spot} onClick={() => clickHandler(id)}>
					{`${firstLetter}${lastLetter}`}
				</div>
			)}
		</>
	);
};

export default MapSpot;
