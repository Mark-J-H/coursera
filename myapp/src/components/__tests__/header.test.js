import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';
import HeroImage from '../../assets/bruchetta.svg';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders the header', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the main title', () => {
    const mainTitle = screen.getByText('Little Lemon');
    expect(mainTitle).toBeInTheDocument();
  });

  test('renders the sub-title', () => {
    const subTitle = screen.getByText('Chicago');
    expect(subTitle).toBeInTheDocument();
  });

  test('renders the description paragraph', () => {
    const description = screen.getByText(/We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist./i);
    expect(description).toBeInTheDocument();
  });

  test('renders the reserve button with aria-label', () => {
    const reserveButton = screen.getByRole('button', { name: /Reserve your table at Little Lemon/i });
    expect(reserveButton).toBeInTheDocument();
  });

  test('renders the hero image with correct alt text', () => {
    const heroImage = screen.getByAltText('Bruchetta dish served at Little Lemon restaurant');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', HeroImage);
  });
});
