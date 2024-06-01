import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../navbar';
import Logo from '../../assets/logo.svg';

const renderNavbar = (isSidebarVisible) => {
  const toggleSidebar = jest.fn();
  render(
    <Router>
      <Navbar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
    </Router>
  );
  return { toggleSidebar };
};

describe('Navbar Component', () => {
  test('renders the logo', () => {
    renderNavbar(false);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', Logo);
  });

  test('toggles the sidebar when the burger icon is clicked', () => {
    const { toggleSidebar } = renderNavbar(false);
    const burgerElement = screen.getByText('☰');
    fireEvent.click(burgerElement);
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });

  test('renders the navigation links', () => {
    renderNavbar(false);
    const links = ['Homepage', 'About', 'Menu', 'Reservations', 'Order', 'Login'];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('calls handleLinkClick when a navigation link is clicked', () => {
    const { toggleSidebar } = renderNavbar(true);
    const linkElement = screen.getByText('Homepage');
    fireEvent.click(linkElement);
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
