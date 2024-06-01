import AboutImage from "../assets/aboutimage.jpg";

function About() {
	return (
		<section className="about-background" aria-labelledby="about-title">
			<article className="about">
				<div className="about-left-content">
					<div className="titles">
						<h1 id="about-title">Little Lemon</h1>
						<svg className="squiggly-line" xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" role="img" aria-label="Decorative squiggly line">
                            <path d="M0,10 Q30,-10 60,10 T120,10" fill="none" stroke="#FFD700" strokeWidth="3"/>
                        </svg>
					</div>
					<p>
						Nestled in the heart of our community, our family-owned Mediterranean restaurant is a culinary oasis where heritage meets innovation. For generations, we've cherished the rich tapestry of Mediterranean flavors, and today, we are proud to share these traditional recipes with a contemporary flair.
					</p>
				</div>
				<div className="about-right-content">
					<img src={AboutImage} alt="About" />
				</div>
			</article>
		</section>
	);
}

export default About;