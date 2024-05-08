import HeroImage from "../assets/bruchetta.svg";

function Header() {
	return (
		<div className="header-background">
			<div className="header">
				<div className="header-left-content">
					<div className="titles">

						<h1>Little Lemon</h1>
						<h2>Chicago</h2>

					</div>
					<p>
						We are a family owned Mediterranean restaurant focused on
						traditional recipes served with a modern twist.{" "}
					</p>
				</div>
				<div className="header-right-content">
					<img src={HeroImage} alt="Header" />
				</div>
			</div>
		</div>
	);
}
export default Header;
