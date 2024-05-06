import GreekSalad from "../assets/greeksalad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Pasta from "../assets/pasta.jpg";
import Star from "../assets/star.jpg";
import TestimonialImage1 from "../assets/testimonial1.jpg";
import TestimonialImage2 from "../assets/testimonial2.jpg";
import TestimonialImage3 from "../assets/testimonial3.jpg";
import TestimonialImage4 from "../assets/testimonial4.jpg";
import AboutImage from "../assets/aboutimage.jpg";

function Main() {
	return (
		<>
			<Specials />
			<Test />
		</>
	);
}

function Specials() {
	return (
		<div className="all-specials">
			<div className="specials-title-and-button">
				<h1>This Weeks Specials!</h1>
				<button>Online Menu</button>
			</div>
			<div className="specials-cards">
				<div className="specials-card1">
					<img src={GreekSalad} alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Greek Salad</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</div>
				<div className="specials-card2">
					<img src={Bruchetta} alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Bruschetta</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</div>
				<div className="specials-card3">
					<img src={Pasta} alt="Header" />
					<div className="specials-card-item">
						<p className="specials-name">Pollo Pasta</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the
						image
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</div>
			</div>
		</div>
	);
}

function Test() {
	return (
		<div className="all-testimonials">
			<div className="testimonials-title-and-button">
				<h1>Testimonials</h1>
			</div>
			<div className="testimonials-cards">
				<div className="testimonials-card1">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<img src={TestimonialImage1} alt="testimonial" />
					<p className="testimonials-card-description">
						I came with my friends for my birthday and everyone had a great
						time!
					</p>
				</div>
				<div className="testimonials-card2">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<img src={TestimonialImage2} alt="testimonial" />
					<p className="testimonials-card-description">
						Great Food! Great People! Love it! Would highly recommend!
					</p>
				</div>
				<div className="testimonials-card3">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<img src={TestimonialImage3} alt="testimonial" />
					<p className="testimonials-card-description">
						Very reasonably priced for the service. I would recommend to
						everyone.
					</p>
				</div>
			</div>
		</div>
	);
}

function Testimonials() {
	return (
		<>
			<div className="main-testimonials">
				<h1>Testimonials</h1>
				<div className="testimonial-cards">
					<div className="testimonial-card-1">
						<div className="testimonial-rating">
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
						</div>

						<div className="testimonials-card-item">
							<img src={TestimonialImage1} alt="testimonial" />

							<p className="testimonial-card-description">
								Great Food! Great People! Love it! Would highly recommend!
							</p>
						</div>
					</div>
					<div className="testimonial-card-2">
						<div className="testimonial-rating">
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
						</div>
						<div className="testimonials-card-item">
							<img src={TestimonialImage2} alt="testimonial" />

							<p className="testimonial-card-description">
								I came with my friends for my birthday and everyone had a great
								time!
							</p>
						</div>
					</div>
					<div className="testimonial-card-3">
						<div className="testimonial-rating">
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
							<img src={Star} alt="star" />
						</div>
						<div className="testimonials-card-item">
							<img src={TestimonialImage3} alt="testimonial" />

							<p className="testimonial-card-description">
								Very reasonably priced for the service. I would recommend to
								everyone.
							</p>
						</div>
					</div>
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
					<img src={AboutImage} alt="Header" />
				</div>
			</div>
		</>
	);
}

export default Main;
