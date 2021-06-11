import style from '../css/Footer.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Timeline } from 'react-twitter-widgets';
import Social from '../Components/Social';

function Footer({ setElsInView, elsInView }) {
	let twitterContRef = useRef();
	let innerTwitterWidth;
	useEffect(() => {
		innerTwitterWidth = twitterContRef.current.clientWidth.toString();
	});

	const { ref, inView } = useInView({
		threshold: 0.9,
	});
	useEffect(() => {
		if (inView) {
			setElsInView({
				...elsInView,
				contact: true,
			});
		} else {
			setElsInView({
				...elsInView,
				contact: false,
			});
		}
	}, [inView]);
	return (
		<div className={style.container} ref={ref}>
			<div className={style.inner}>
				<Social colorScheme="white" />
				<div className={style.twitterCont} ref={twitterContRef}>
					<a
						className="twitter-timeline"
						href="https://twitter.com/hamaracapital?ref_src=twsrc%5Etfw"
					>
						Tweets by hamaracapital
					</a>{' '}
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charSet="utf-8"
					></script>
				</div>
			</div>
		</div>
	);
}

export default Footer;
