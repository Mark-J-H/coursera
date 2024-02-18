function Main() {
	return (
		<>
			<Specials />
			<Testimonials />
			<About />
		</>
	);
}

function Specials() {
	return (
		<>
			<div className="specials">
				<h1>Specials</h1>
				<button>Online Menu</button>
			</div>
			<div className="specials-cards">
				<div className="specials-card1">
					<img src="assets/greeksalad.jpg" alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="special-name">Order a delivery</p>
				</div>
				<div className="specials-card2">
					<img src="assets/bruchetta.svg" alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="special-name">Order a delivery</p>
				</div>
				<div className="specials-card3">
					<img src="assets/lemondessert.jpg" alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="special-name">Order a delivery</p>
				</div>
			</div>
		</>
	);
}

function Testimonials() {
	return (
		<>
			<div className="main-testimonials">
				<h1>Testimonials</h1>
			</div>
			<div className="testimonial-cards">
				<div className="testimonial-card-1">
					<div className="testimonial-rating">
						<img src="assets/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="assets/testimonial1.jpg" alt="test1" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-2">
					<div className="testimonial-rating">
						<img src="assets/star.jpg" alt="star" />
						<img src="assets/star.jpg" alt="star" />
						<img src="assets/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="assets/testimonial2.jpg" alt="test2" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-3">
					<div className="testimonial-rating">
						<img src="assets/star.jpg" alt="star" />
						<img src="assets/star.jpg" alt="star" />
						<img src="assets/star.jpg" alt="star" />
						<img src="assets/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="assets/testimonial3.jpg" alt="test3" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-4">
					<div className="testimonial-rating">
					<img src="assets/star.jpg" alt="star" />
					<img src="assets/star.jpg" alt="star" />
					<img src="assets/star.jpg" alt="star" />
					<img src="assets/star.jpg" alt="star" />
					<img src="assets/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="assets/testimonial4.jpg" alt="test4" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
			</div>
		</>
	);
}

function About() {
	return (
		<>
			<div className="about-container">
				<div className="about-content">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>This is some text.</p>
				</div>
				<div className="about-image">
					<img src="assets/restaurant.jpg" alt="Header" />
				</div>
			</div>
		</>
	);
}

export default Main;
