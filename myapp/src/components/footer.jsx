import FooterImage from '../assets/footer.jpg'

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-image">
				<img src={FooterImage} alt="Header" />
			</div>
			<div className="footer-content">
				<div className="footer-category">
					<h4>Navigation</h4>
					<ul>
						<li>
							<a href="#category">Home</a>
						</li>
						<li>
							<a href="#category">About</a>
						</li>
            <li>
							<a href="#category">Menu</a>
						</li>
            <li>
							<a href="#category">Reservations</a>
						</li>
            <li>
							<a href="#category">Order Online</a>
						</li>
            <li>
							<a href="#category">Login</a>
						</li>
					</ul>
				</div>
				<div className="footer-category">
					<h4>Contact</h4>
					<ul>
						<li>
							<a href="#category">Address</a>
						</li>
						<li>
							<a href="#category">Phone</a>
						</li>
            <li>
							<a href="#category">Email</a>
						</li>
					</ul>
				</div>
				<div className="footer-category">
					<h4>Social Media Links</h4>
					<ul>
						<li>
							<a href="#category">Address</a>
						</li>
						<li>
							<a href="#category">Phone</a>
						</li>
            <li>
							<a href="#category">Email</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
