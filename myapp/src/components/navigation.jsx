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

function showSideBar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex';
}

function hideSideBar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none';
}

	return (
		<Router>
		<nav>
			<ul>
				<li>
					<Link to="/" className="anchor-logo">
					<img src={Logo} alt="logo" />
					</Link>
				</li>
				<li>
					<Link className="hideOnMobile" to="/Home">Homepage</Link>
				</li>
				<li>
					<Link className="hideOnMobile" to="/About">About</Link>
				</li>
				<li>
					<Link className="hideOnMobile" to="/Menu">Menu</Link>
				</li>
				<li>
					<Link className="hideOnMobile" o="/Reservations">Reservations</Link>
				</li>
				<li>
					<Link className="hideOnMobile" to="/Order">Order</Link>
				</li>
				<li>
					<Link className="hideOnMobile" to="/Login">Login</Link>
				</li>
				<li>
				<Link className="menuButton" onClick={showSideBar}>
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
				</Link>
				</li>
			</ul>
			<ul className="sidebar">
				<li>
				<Link onClick={hideSideBar}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
				</Link>
				</li>
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
