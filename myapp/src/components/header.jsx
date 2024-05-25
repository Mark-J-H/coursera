import HeroImage from "../assets/bruchetta.svg";

function Header() {
	return (
		<header className="header-background">
			<div className="header">
				<div className="header-left-content">
					<div className="titles">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
					</div>
					<p>
						We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
					</p>
					<button>Reserve Your Table</button>
				</div>
				<div className="header-right-content">
					<img src={HeroImage} alt="Header" />
				</div>
			</div>
		</header>
	);
}
export default Header;