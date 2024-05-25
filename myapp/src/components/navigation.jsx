import Logo from "../assets/logo.svg";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import Reservations from "../pages/reservations";
import Menu from "../pages/menu";
import Order from "../pages/order";
import About from "../pages/about";
import { useState, useEffect } from "react";

function Navigation() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1024) {
                setIsSidebarVisible(false); 
			}
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



	function toggleSidebar() {
		setIsSidebarVisible(!isSidebarVisible);
	}

	return (
		<Router>
			<header>
				<nav className="navbar-menu">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
					<div className={`burger ${isSidebarVisible ? 'rotate' : ''}`} onClick={toggleSidebar}>
						☰
					</div>
					<ul id="nav-list" className={`navbar-links ${isSidebarVisible ? 'show' : ''}`}>
						<li className="nav-li">
							<Link className="active-menu" to="/Home">Homepage</Link>
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
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Home" element={<Homepage />} />
					<Route path="/About" element={<About />} />
					<Route path="/Menu" element={<Menu />} />
					<Route path="/Reservations" element={<Reservations />} />
					<Route path="/Order" element={<Order />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</main>
		</Router>
	);
}


export default Navigation;
