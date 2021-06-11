import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import style from '../css/Social.module.css';

function Social({ colorScheme }) {
	return (
		<div className={style.container}>
			<h2
				className={`${colorScheme === 'red' ? style.headRed : style.headWhite}`}
			>
				Contact Me
			</h2>
			<p>
				<a href="tel:+16047898089">(604) 789 - 8089</a>
			</p>
			<p>
				<a href="mailto:daniel@hamara.capital">daniel@hamara.capital</a>
			</p>
			<div className={style.socials}>
				<div className="socialMediaEl">
					<a href="https://www.instagram.com/danielisaacgold">
						<FaInstagram size={25} />
					</a>
				</div>
				<div className="socialMediaEl">
					<a href="https://twitter.com/hamaracapital">
						<FaTwitter size={25} />
					</a>
				</div>
				<div className="socialMediaEl">
					<a href="https://linkedin.com">
						<FaLinkedin size={25} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Social;
