import Carousel from '../Components/Carousel';
import TextContainer from '../Components/TextContainer';
import ImageComponent from '../Components/ImageComponent';
import Article from '../Components/Article';
import Footer from '../Components/Footer';
import { text1, text2 } from '../Assets/text.js';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { articleText } from '../Assets/text';

function IndexPage({ setElsInView, elsInView }) {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	useEffect(() => {
		if (inView) {
			setElsInView({
				...elsInView,
				about: true,
			});
		} else {
			setElsInView({
				...elsInView,
				about: false,
			});
		}
	}, [inView]);
	return (
		<div className="mainCont">
			<section id="home">
				<Carousel />
			</section>
			<section ref={ref}>
				<TextContainer text={text1} scheme="red" />
				<ImageComponent />
				<TextContainer text={text2} scheme="white" />
			</section>
			<article id="partners">
				<Article
					setElsInView={setElsInView}
					elsInView={elsInView}
					text={articleText}
				/>
			</article>
			<footer id="contact">
				<Footer setElsInView={setElsInView} elsInView={elsInView} />
			</footer>
		</div>
	);
}

export default IndexPage;
