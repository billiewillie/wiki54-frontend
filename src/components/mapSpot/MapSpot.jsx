import styles from './MapSpot.module.css';

const MapSpot = ({ clickHandler, place }) => {
	return (
		<div
			className={styles.Spot}
			onClick={() => clickHandler(place.line, place.place)}
			style={{ top: `${place.top}vh`, left: `${place.left}vw` }}></div>
	);
};

export default MapSpot;
