import Logo from '../assets/logo.svg';
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Homepage from '../pages/homepage';
import Login from '../pages/login';
import Reservations from '../pages/reservations';
import Menu from '../pages/menu';
import Order from '../pages/order';
import About from '../pages/about';

function Navigation() {

	const [navigationScreen, setNavigationScreen] = useState(false);

	const toggleNav = () => {
        setNavigationScreen(!navigationScreen);
    }

	return (
		<Router>
		<nav className="navbar-container">
			<Link to="/" className="navbar-logo">
				<img src={Logo} alt="Logo" />
			</Link>

			<div className="burger-menu" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

			<ul className={`navbar-items ${navigationScreen ? 'nav-true' : ''}`}>
				<li>
					<Link to="/Home">Homepage</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Menu">Menu</Link>
				</li>
				<li>
					<Link to="/Reservations">Reservations</Link>
				</li>
				<li>
					<Link to="/Order">Order</Link>
				</li>
				<li>
					<Link to="/Login">Login</Link>
				</li>
			</ul>
		</nav>
		<Routes>
			<Route path="/Home" element={<Homepage />} />
			<Route path="/About" element={<About />} />
			<Route path="/Menu" element={<Menu />} />
			<Route path="/Reservations" element={<Reservations />} />
			<Route path="/Order" element={<Order />} />
			<Route path="/Login" element={<Login />} />
		</Routes>
		</Router>
	);
}

export default Navigation;
