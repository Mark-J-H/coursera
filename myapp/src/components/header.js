function Header() {
  return (
      <div className="header">
          <div className="header-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>This is some text that describes the content or purpose of the hero section.</p>
              <button>Reserve Your Table</button>
          </div>
          <div className="header-image">
              <img src="/logo192.png" alt="Header" />
          </div>
      </div>
  );
}

export default Header;