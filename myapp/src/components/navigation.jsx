function Navigation() {
	return (
		<nav className="navbar-container">
			<a href="/" className="navbar-logo">
				<img src="/assets/logo.svg" alt="Logo" />
			</a>
			<ul className="navbar-items">
				<li>
					<a href="/Home">Homepage</a>
				</li>
				<li>
					<a href="/About">About</a>
				</li>
				<li>
					<a href="/Menu">Menu</a>
				</li>
				<li>
					<a href="/Reservations">Reservations</a>
				</li>
				<li>
					<a href="/Order">Order</a>
				</li>
				<li>
					<a href="/Login">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
