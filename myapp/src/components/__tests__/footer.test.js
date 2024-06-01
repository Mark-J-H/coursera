import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders the footer with role contentinfo', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the navigation section with correct heading', () => {
    const navigationHeading = screen.getByRole('heading', { name: 'Navigation' });
    expect(navigationHeading).toBeInTheDocument();
    const navigationLinks = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    navigationLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('renders the contact section with correct heading', () => {
    const contactHeading = screen.getByRole('heading', { name: 'Contact' });
    expect(contactHeading).toBeInTheDocument();
    const contactLinks = ['Address', 'Phone', 'Email'];
    contactLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('renders the social media section with correct heading', () => {
    const socialMediaHeading = screen.getByRole('heading', { name: 'Social Media Links' });
    expect(socialMediaHeading).toBeInTheDocument();
    const socialMediaLinks = ['Instagram', 'Facebook', 'Twitter'];
    socialMediaLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
