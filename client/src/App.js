import { useState } from 'react';
import Navbar from './Components/Navbar';
import IndexPage from './Pages/Index';
import ConsultingPage from './Pages/ConsultingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [elsInView, setElsInView] = useState({
		partners: false,
		about: false,
		contact: false,
	});
	const [navOpen, setNavOpen] = useState(false);
	const navHandler = () => {
		if (navOpen) setNavOpen(false);
		if (!navOpen) setNavOpen(true);
	};
	return (
		<div className="App">
			<Router>
				<Navbar
					elsInView={elsInView}
					navHandler={navHandler}
					navOpen={navOpen}
				/>
				<Switch>
					<Route path="/" exact>
						<IndexPage setElsInView={setElsInView} elsInView={elsInView} />
					</Route>
					<Route path="/consulting">
						<ConsultingPage setElsInView={setElsInView} elsInView={elsInView} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
