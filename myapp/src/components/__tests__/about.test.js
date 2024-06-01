import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../about';
import AboutImage from '../../assets/aboutimage.jpg';

describe('About Component', () => {
  test('renders the section with correct aria-labelledby', () => {
    render(<About />);
    const sectionElement = screen.getByRole('region', { name: 'Little Lemon' });
    expect(sectionElement).toBeInTheDocument();
  });

  test('renders the title', () => {
    render(<About />);
    const titleElement = screen.getByText('Little Lemon');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the decorative squiggly line', () => {
    render(<About />);
    const svgElement = screen.getByRole('img', { name: 'Decorative squiggly line' });
    expect(svgElement).toBeInTheDocument();
  });

  test('renders the paragraph', () => {
    render(<About />);
    const paragraphElement = screen.getByText(
      /Nestled in the heart of our community, our family-owned Mediterranean restaurant is a culinary oasis where heritage meets innovation./i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders the image with correct alt text', () => {
    render(<About />);
    const imageElement = screen.getByAltText('About');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', AboutImage);
  });
});
