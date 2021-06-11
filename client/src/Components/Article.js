import style from '../css/Article.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Article({
	setElsInView,
	elsInView,
	headColor = 'black',
	reverse = false,
	text,
}) {
	const { ref, inView } = useInView({
		threshold: 0.9,
	});
	useEffect(() => {
		if (inView) {
			setElsInView({
				...elsInView,
				partners: true,
			});
		} else {
			setElsInView({
				...elsInView,
				partners: false,
			});
		}
	}, [inView]);
	const variants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 0.5,
			},
		},
		hidden: {
			opacity: 0,
		},
	};
	return (
		<motion.div
			className={style.container}
			ref={ref}
			className={style.inner}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<div className={`${style.inner} ${reverse ? style.reverse : ''}`}>
				<div
					className={`${style.imageCont} ${reverse ? style.reverse : ''}`}
				></div>
				<div
					className={`${style.textCont} ${
						headColor === 'red' ? style.red : style.black
					} ${reverse ? style.reverse : ''}`}
				>
					<h2>{reverse ? 'Grant Nikseresht' : 'Daniel Gold'}</h2>
					<h3>{reverse ? 'Partner' : 'Founder'}</h3>
					<p className={style.text}>{text}</p>
				</div>
			</div>
		</motion.div>
	);
}

export default Article;
