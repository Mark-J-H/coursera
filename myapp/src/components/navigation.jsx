import Logo from "../assets/logo.svg";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import Reservations from "../pages/reservations";
import Menu from "../pages/menu";
import Order from "../pages/order";
import About from "../pages/about";

function Navigation() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	function toggleSidebar() {
		setIsSidebarVisible(!isSidebarVisible);
	}

	return (
		<Router>
			<nav>
				<div className="navbar-menu">

					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
					<div className="burger" onClick={toggleSidebar}>
						☰
					</div>
					<ul id="nav-list" className={`navbar-links ${isSidebarVisible ? 'show' : ''}`}>
						<li className="nav-li">
							<Link className="active-menu" to="/Home">
								Homepage
							</Link>
						</li>
						<li className="nav-li">
							<Link to="/About">About</Link>
						</li>
						<li className="nav-li">
							<Link to="/Menu">Menu</Link>
						</li>
						<li className="nav-li">
							<Link to="/Reservations">Reservations</Link>
						</li>
						<li className="nav-li">
							<Link to="/Order">Order</Link>
						</li>
						<li className="nav-li">
							<Link to="/Login">Login</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Homepage />} />
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
