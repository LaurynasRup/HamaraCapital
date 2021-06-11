import style from '../css/Carousel.module.css';
import { motion } from 'framer-motion';
function Carousel() {
	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		hidden: {
			opacity: 0,
			y: 25,
		},
	};

	return (
		<div className={style.container}>
			<div className={style.slide1}></div>
			<div className={style.slide2}></div>
			<div className={style.slide3}></div>
			<motion.h1 initial="hidden" animate="visible" variants={variants}>
				At the intersection of bright
			</motion.h1>
			<motion.h1 initial="hidden" animate="visible" variants={variants}>
				minds, creativity and possibility
			</motion.h1>
		</div>
	);
}

export default Carousel;
