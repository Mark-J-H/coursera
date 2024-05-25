import GreekSalad from "../assets/greeksalad.jpg";
import LemonCake from "../assets/lemondessert.jpg";
import Pasta from "../assets/pasta.jpg";

function Specials() {
	return (
		<section className="all-specials">
			<div className="specials-title-and-button">
				<h1>This Week's Specials!</h1>
				<button>Online Menu</button>
			</div>
			<div className="specials-cards">
				<article className="specials-card1">
					<img src={GreekSalad} alt="Greek Salad" />
					<div className="specials-card-item">
						<p className="specials-name">Greek Salad</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the image.
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</article>
				<article className="specials-card3">
					<img src={Pasta} alt="Pasta" />
					<div className="specials-card-item">
						<p className="specials-name">Pollo Pasta</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the image.
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</article>
				<article className="specials-card2">
					<img src={LemonCake} alt="Lemon Cake" />
					<div className="specials-card-item">
						<p className="specials-name">Lemon Cake</p>
						<p className="specials-price">$12.99</p>
					</div>
					<p className="specials-card-description">
						Here is some important information about the food that is in the image.
					</p>
					<p className="specials-delivery">Order a delivery</p>
				</article>
			</div>
		</section>
	);
}

export default Specials;