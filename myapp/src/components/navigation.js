import { ReactComponent as Logo } from './logo.svg';

function Navigation() {
    return (
    <nav class="navbar">
      <a href="/" class="logo"><Logo /></a>
      <ul className="nav-items">
        <li><a href="/Home">Homepage</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Reservations">Reservations</a></li>
        <li><a href="/Order">Order Online</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
      </nav>
    );
  }

  export default Navigation