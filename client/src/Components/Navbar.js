import style from '../css/Navbar.module.css';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import consultingLogo from '../images/consultingLogo.png';
import { useLocation } from 'react-router-dom';
import logoRed from '../images/logoRed.png';

function Navbar({ elsInView, navHandler, navOpen }) {
	const location = useLocation();
	const pathname = location.pathname;
	const variants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeIn',
				delay: 0.5,
			},
		},
		hidden: {
			opacity: 0,
		},
	};
	return (
		<nav
			className={`${style.navbar} ${
				pathname === '/consulting' ? style.navbarWhite : style.navbarRed
			}`}
		>
			<motion.div
				className={style.inner}
				initial="hidden"
				animate="visible"
				variants={variants}
			>
				<span className="logo">
					<a href="#home">
						<img
							className={style.logoImg}
							src={
								pathname === '/consulting'
									? 'https://res.cloudinary.com/laurynasrup/image/upload/q_auto:best/v1623416567/Hamara/consultingLogo_sounoe.png'
									: 'https://res.cloudinary.com/laurynasrup/image/upload/q_auto:best/v1623416567/Hamara/logo_z0c1wx.png'
							}
							alt="Hamara Logo"
						/>
					</a>
				</span>
				{pathname !== '/consulting' && (
					<div
						className={`${style.burger} ${navOpen ? style.open : ''}`}
						onClick={navHandler}
					>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}

				<>
					{pathname === '/' && (
						<ul className={`${style.navbarMenu} ${navOpen ? style.open : ''}`}>
							<li>
								<a href="#about" className={style.linkBlack}>
									About
								</a>
								<div className={elsInView.about ? style.line : ''} />
							</li>
							<li>
								<a href="#partners" className={style.linkBlack}>
									Partners
								</a>
								<div className={elsInView.partners ? style.line : ''} />
							</li>
							<li>
								<a href="#contact" className={style.linkBlack}>
									Contact
								</a>
								<div className={elsInView.contact ? style.line : ''} />
							</li>
							<li className={style.bordered}>
								<a href="/consulting" className={style.linkBlack}>
									Consulting
								</a>
							</li>
						</ul>
					)}
					{pathname === '/consulting' && (
						<ul>
							<li>
								<a href="/" className={style.linkRed}>
									Capital
								</a>
							</li>
						</ul>
					)}
				</>
			</motion.div>
		</nav>
	);
}

export default Navbar;
