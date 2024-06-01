import React, { useState, useEffect, useReducer } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from "../assets/logo.svg";


function Navbar({isSidebarVisible, toggleSidebar }) {


    function handleLinkClick() {
        if (window.innerWidth <= 1024) {
            toggleSidebar();
        }
    }

    return (
            <header>
                <nav className="navbar-menu">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className={`burger ${isSidebarVisible ? 'rotate' : ''}`} onClick={toggleSidebar}>
                        ☰
                    </div>
                    <ul id="nav-list" className={`navbar-links ${isSidebarVisible ? 'show' : ''}`} >
                        <li className="nav-li">
                            <Link className="active-menu" to="/Home" onClick={handleLinkClick}>Homepage</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/About" onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/Menu" onClick={handleLinkClick}>Menu</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/Reservations" onClick={handleLinkClick}>Reservations</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/Order" onClick={handleLinkClick}>Order</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/Login" onClick={handleLinkClick}>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}

export default Navbar;
