import FooterImage from "../assets/footer.jpg";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-text-content">
				<article className="footer-category">
					<h4>Navigation</h4>
					<ul>
						<li>
							<a href="#homepage">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#menu">Menu</a>
						</li>
						<li>
							<a href="#reservations">Reservations</a>
						</li>
						<li>
							<a href="#order">Order Online</a>
						</li>
						<li>
							<a href="#login">Login</a>
						</li>
					</ul>
				</article>
				<article className="footer-category">
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
				</article>
				<article className="footer-category">
					<h4>Social Media Links</h4>
					<ul>
						<li>
							<a href="#category">Instagram</a>
						</li>
						<li>
							<a href="#category">Facebook</a>
						</li>
						<li>
							<a href="#category">Twitter</a>
						</li>
					</ul>
				</article>
			</div>
		</footer>
	);
}

export default Footer;