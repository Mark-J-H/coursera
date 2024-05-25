import Star from "../assets/star.jpg";
import TestimonialImage1 from "../assets/testimonial1.jpg";
import TestimonialImage2 from "../assets/testimonial2.jpg";
import TestimonialImage3 from "../assets/testimonial3.jpg";
import TestimonialImage4 from "../assets/testimonial4.jpg";

function Testimonials() {
	return (
		<section className="all-testimonials">
			<div className="testimonials-title-and-button">
				<h1>'What Our Customers Say...'</h1>
			</div>
			<div className="testimonials-cards">
				<article className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<div className="testimonials-img-and-text-wrapper">
						<div className="testimonials-img-and-text">
							<img src={TestimonialImage1} alt="testimonial" />
							<p className="testimonials-card-description">
								' I came with my friends for my birthday and everyone had a great time! '
							</p>
						</div>
					</div>
				</article>
				<article className="testimonials-card">
					<div className="testimonials-rating">
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
						<img className="star-img" src={Star} alt="star" />
					</div>
					<div className="testimonials-img-and-text-wrapper">
						<div className="testimonials-img-and-text">
							<img src={TestimonialImage2} alt="testimonial" />
							<p className="testimonials-card-description">
								' Great Food! Great People! Love it! Would highly recommend! '
							</p>
						</div>
					</div>
				</article>
				<article className="testimonials-card">
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
								' Very reasonably priced for the service. I would recommend to everyone. '
							</p>
						</div>
					</div>
				</article>
				<article className="testimonials-card">
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
								' Very reasonably priced for the service. I would recommend to everyone. '
							</p>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}


export default Testimonials;