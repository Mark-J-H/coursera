import FooterImage from "../assets/footer.jpg";

function Footer() {
	return (
		<footer className="footer-container" role="contentinfo">
			<div className="footer-text-content">
				<article className="footer-category" aria-labelledby="navigation-heading">
					<h4 id="navigation-heading">Navigation</h4>
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
				<article className="footer-category" aria-labelledby="contact-heading">
					<h4 id="contact-heading">Contact</h4>
					<ul>
						<li>
							<a href="#address">Address</a>
						</li>
						<li>
							<a href="#phone">Phone</a>
						</li>
						<li>
							<a href="#email">Email</a>
						</li>
					</ul>
				</article>
				<article className="footer-category" aria-labelledby="social-media-heading">
					<h4 id="social-media-heading">Social Media Links</h4>
					<ul>
						<li>
							<a href="#instagram">Instagram</a>
						</li>
						<li>
							<a href="#facebook">Facebook</a>
						</li>
						<li>
							<a href="#twitter">Twitter</a>
						</li>
					</ul>
				</article>
			</div>
		</footer>
	);
}

export default Footer;
