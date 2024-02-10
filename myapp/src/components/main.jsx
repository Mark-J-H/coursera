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
			<div className="main">
				<h1>This weeks specials!</h1>
				<button>Online Menu</button>
			</div>
			<div className="cards">
				<div className="card1">
					<img src="/greeksalad.jpg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
					<p>Card1</p>
				</div>
				<div className="card2">
					<img src="/bruchetta.svg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						{" "}
						afeuf neuf neiufneif efineifn eifnefiu nefienfi efnie nfeifn
					</p>
					<p>Card1</p>
				</div>
				<div className="card3">
					<img src="/lemondessert.jpg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						aaa aaaaaa aaaaa aaafeufneu fneiu fneifn efine ifneifne fiune fie
						nfiefn ienfeifn
					</p>
					<p>Card1</p>
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
					<p>Greek Salad</p>
					<div className="card-item">
						<img src="/greeksalad.jpg" alt="Header" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
				</div>
				<div className="testimonial-card-2">
        <p>Greek Salad</p>
					<div className="card-item">
						<img src="/greeksalad.jpg" alt="Header" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
				</div>
				<div className="testimonial-card-3">
        <p>Greek Salad</p>
					<div className="card-item">
						<img src="/greeksalad.jpg" alt="Header" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
				</div>
				<div className="testimonial-card-4">
        <p>Greek Salad</p>
					<div className="card-item">
						<img src="/greeksalad.jpg" alt="Header" />
						<p>hi</p>
					</div>
					<p className="testimonial-card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
				</div>
			</div>
		</>
	);
}

function About() {
	return (
		<>
			<div className="main">
				<h1>This weeks specials!</h1>
				<button>Online Menu</button>
			</div>
			<div className="cards">
				<div className="card1">
					<img src="/greeksalad.jpg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						aaaaaaa aaaaaa aaaaf eufneu fneiuf neifne fineifn eif nefiunefienf
						iefnienfeifn
					</p>
					<p>Card1</p>
				</div>
				<div className="card2">
					<img src="/bruchetta.svg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						{" "}
						afeuf neuf neiufneif efineifn eifnefiu nefienfi efnie nfeifn
					</p>
					<p>Card1</p>
				</div>
				<div className="card3">
					<img src="/lemondessert.jpg" alt="Header" />
					<div className="card-item">
						<p>Greek Salad</p>
						<p>$12.99</p>
					</div>
					<p className="card-description">
						aaa aaaaaa aaaaa aaafeufneu fneiu fneifn efine ifneifne fiune fie
						nfiefn ienfeifn
					</p>
					<p>Card1</p>
				</div>
			</div>
		</>
	);
}

export default Main;
