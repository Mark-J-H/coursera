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
					<img src="/greeksalad.jpg" alt="Header" />
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
					<img src="/bruchetta.svg" alt="Header" />
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
					<img src="/lemondessert.jpg" alt="Header" />
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
						<img src="/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="/testimonial1.jpg" alt="test1" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-2">
					<div className="testimonial-rating">
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="/testimonial2.jpg" alt="test2" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-3">
					<div className="testimonial-rating">
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="/testimonial3.jpg" alt="test3" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						This is a basic review of the restaurant
					</p>
				</div>
				<div className="testimonial-card-4">
					<div className="testimonial-rating">
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
						<img src="/star.jpg" alt="star" />
					</div>
					<div className="testimonials-card-item">
						<img src="/testimonial4.jpg" alt="test4" />
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
					<p>
						This is some text that describes the content or purpose of the hero
						section.
					</p>
				</div>
				<div className="about-image">
					<img src="/restauranfood.jpg" alt="Header" />
				</div>
			</div>
		</>
	);
}

export default Main;
