import { motion } from 'framer-motion';
import styles from './backgroundAnimated.module.scss';
import { useState, useEffect } from 'react';

export const BackgroundAnimated = () => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const mouseMoveFunc = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener('mousemove', mouseMoveFunc);

		return () => {
			window.removeEventListener('mousemove', mouseMoveFunc);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 500,
			y: mousePosition.y - 419,
		},
	};

	return (
		<motion.div
			className={styles.cursorBackground}
			variants={variants}
			animate='default'
			transition={{
				delay: 0,
				x: { duration: 0 },
				y: { duration: 0 },
				default: { ease: 'linear' },
			}}
		/>
	);
};
