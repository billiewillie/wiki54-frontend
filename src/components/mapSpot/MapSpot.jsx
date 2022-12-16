import styles from './MapSpot.module.css';

const MapSpot = ({ clickHandler, place }) => {
	return (
		<div
			className={styles.Spot}
			onClick={() => clickHandler(place.line, place.place)}
			style={{ top: `${place.top}px`, left: `${place.left}px` }}></div>
	);
};

export default MapSpot;
