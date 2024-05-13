import GreekSalad from "../assets/greeksalad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Pasta from "../assets/pasta.jpg";
import Star from "../assets/star.jpg";
import TestimonialImage1 from "../assets/testimonial1.jpg";
import TestimonialImage2 from "../assets/testimonial2.jpg";
import TestimonialImage3 from "../assets/testimonial3.jpg";
import TestimonialImage4 from "../assets/testimonial4.jpg";
import AboutImage from "../assets/aboutimage.jpg";
import RestoImage from "../assets/restaurant.jpg";

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

function Testimonials() {
	return (
		<div className="all-testimonials">
			<div className="testimonials-title-and-button">
				<h1>What Our Customers Say</h1>
			</div>
			<div className="testimonials-cards">
				<div className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<div className="testimonials-img-and-text-wrapper">
					<div className="testimonials-img-and-text">
						<img src={TestimonialImage1} alt="testimonial" />
						<p className="testimonials-card-description">
							I came with my friends for my birthday and everyone had a great
							time!
						</p>
					</div>
					</div>
				</div>
				<div className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<div className="testimonials-img-and-text-wrapper">
					<div className="testimonials-img-and-text">
						<img src={TestimonialImage2} alt="testimonial" />
						<p className="testimonials-card-description">
							Great Food! Great People! Love it! Would highly recommend!
						</p>
					</div>
					</div>
				</div>
				<div className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>

					<div className="testimonials-img-and-text-wrapper">
					<div className="testimonials-img-and-text">
						<img src={TestimonialImage3} alt="testimonial" />
						<p className="testimonials-card-description">
							Very reasonably priced for the service. I would recommend to
							everyone.
						</p>
					</div>
					</div>
				</div>
				<div className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<div className="testimonials-img-and-text-wrapper">
					<div className="testimonials-img-and-text">
						<img src={TestimonialImage4} alt="testimonial" />
						<p className="testimonials-card-description">
							Very reasonably priced for the service. I would recommend to
							everyone.
						</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="about-background">
			<div className="about">
				<div className="about-left-content">
					<div className="titles">
						<h1>Little Lemon</h1>
                        <svg className="squiggly-line" xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20">
                            <path d="M0,10 Q30,-10 60,10 T120,10" fill="none" stroke="#FFD700" strokeWidth="3"/>
                        </svg>
					</div>
					<p>
						Nestled in the heart of our community, our family-owned
						Mediterranean restaurant is a culinary oasis where heritage meets
						innovation. For generations, we've cherished the rich tapestry of
						Mediterranean flavors, and today, we are proud to share these
						traditional recipes with a contemporary flair.{" "}
					</p>
				</div>
				<div className="about-right-content">
					<img src={RestoImage} alt="About" />
				</div>
			</div>
		</div>
	);
}

export default Main;
