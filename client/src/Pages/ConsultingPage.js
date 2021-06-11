import TextContainer from '../Components/TextContainer';
import { loremText } from '../Assets/text';
import Article from '../Components/Article';
import { articleText, articleText2 } from '../Assets/text';
import Social from '../Components/Social';

function ConsultingPage({ setElsInView, elsInView }) {
	return (
		<div className="mainCont white" id="#consultingHome">
			<section id="home">
				<TextContainer text={loremText} scheme="white" />
				<Article
					setElsInView={setElsInView}
					elsInView={elsInView}
					headColor="red"
					text={articleText}
				/>
				<div className="line-break" />
				<Article
					setElsInView={setElsInView}
					elsInView={elsInView}
					headColor="red"
					reverse={true}
					text={articleText2}
				/>
				<div className="social-cont">
					<Social colorScheme="red" />
				</div>
			</section>
		</div>
	);
}

export default ConsultingPage;
