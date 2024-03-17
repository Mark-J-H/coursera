import HeroImage from '../assets/hero.jpg'

function Header() {
  return (
      <div className="header">
          <div className="header-left-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist. </p>
              <button>Reserve Your Table</button>
          </div>
          <div className="header-image">
              <img src={HeroImage} alt="Header" />
          </div>
      </div>
  );
}
export default Header;