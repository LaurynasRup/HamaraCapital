import style from '../css/TextContainer.module.css';
import { motion } from 'framer-motion';

function TextRed({ text, scheme }) {
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
		<div
			className={scheme === 'red' ? style.containerRed : style.containerWhite}
			id={scheme === 'red' ? 'about' : ''}
		>
			<motion.div
				className={style.inner}
				initial="hidden"
				animate="visible"
				variants={variants}
			>
				<p className={style.textJustify}>{text}</p>
			</motion.div>
		</div>
	);
}

export default TextRed;
