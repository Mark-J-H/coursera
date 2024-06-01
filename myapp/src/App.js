import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Reservations from "./pages/reservations";
import Menu from "./pages/menu";
import Order from "./pages/order";
import About from "./pages/about";

function initializeTimes() {
	return ["18:00", "18:30", "19:00", "19:30", "20:00"];
}

function updateTimes(state, action) {
	switch (action.type) {
		case "UPDATE":
			return initializeTimes();
		case "RESERVE":
			return state.filter((time) => time !== action.payload);
		default:
			return state;
	}
}

function App() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth > 1024) {
				setIsSidebarVisible(false);
			}
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function toggleSidebar() {
		if (window.innerWidth <= 1024) {
			setIsSidebarVisible(!isSidebarVisible);
		}
	}
	return (
		<Router>
			<Navbar
				isSidebarVisible={isSidebarVisible}
				toggleSidebar={toggleSidebar}
			/>
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Home" element={<Homepage />} />
					<Route path="/About" element={<About />} />
					<Route path="/Menu" element={<Menu />} />
					<Route
						path="/Reservations"
						element={
							<Reservations
								availableTimes={availableTimes}
								dispatch={dispatch}
							/>
						}
					/>
					<Route path="/Order" element={<Order />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
