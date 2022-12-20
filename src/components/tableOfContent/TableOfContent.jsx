import { useEffect, useState } from 'react';
import styles from './TableOfContent.module.css';
import { useHeadsObserver } from '../../hooks/UseHeadsObserver';

const TableOfContent = () => {
	const [headings, setHeadings] = useState([]);
	const { activeId } = useHeadsObserver();

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll('h2, h3')).map((elem) => ({
			id: elem.id,
			text: elem.innerText,
			level: Number(elem.nodeName.charAt(1)),
		}));
		setHeadings(elements);
	}, []);

	const getClassName = (level) => {
		switch (level) {
			case 2:
				return 'head2';
			case 3:
				return 'head3';
			default:
				return null;
		}
	};

	return (
		<>
			<nav className={styles.nav}>
				<p>
					<b>Навигация по заголовкам</b>
				</p>
				<ul>
					{headings.map((heading) => (
						<li key={heading.id} className={getClassName(heading.level)}>
							<a
								href={`#${heading.id}`}
								onClick={(e) => {
									e.preventDefault();
									document.querySelector(`#${heading.id}`).scrollIntoView({
										behavior: 'smooth',
									});
								}}
								style={{
									fontWeight: 'normal',
									// fontWeight: activeId === heading.id ? 'bold' : 'normal',
								}}>
								{heading.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default TableOfContent;
