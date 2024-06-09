import HeroImage from "../assets/bruchetta.svg";
import {useNavigate} from 'react-router-dom';

function Header() {

	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/Reservations');
		}

	return (
		<header className="header-background" role="banner">
			<div className="header">
				<div className="header-left-content">
					<div className="titles">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
					</div>
					<p>
						We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
					</p>
					<button aria-label="Reserve your table at Little Lemon" onClick={handleButtonClick}>Reserve Your Table</button>
				</div>
				<div className="header-right-content">
					<img src={HeroImage} alt="Bruchetta dish served at Little Lemon restaurant" />
				</div>
			</div>
		</header>
	);
}

export default Header;
