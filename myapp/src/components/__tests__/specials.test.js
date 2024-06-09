import React from 'react';
import { render, screen } from '@testing-library/react';
import Specials from '../specials';
import GreekSalad from '../../assets/greeksalad.jpg';
import LemonCake from '../../assets/lemondessert.jpg';
import Pasta from '../../assets/pasta.jpg';

describe('Specials Component', () => {
  beforeEach(() => {
    render(<Specials />);
  });

  test('renders the specials section title', () => {
    const titleElement = screen.getByText("This Week's Specials!");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the Online Menu button', () => {
    const buttonElement = screen.getByText('Online Menu');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the Greek Salad card', () => {
    const greekSaladImage = screen.getByAltText('Greek Salad');
    expect(greekSaladImage).toBeInTheDocument();
    expect(greekSaladImage).toHaveAttribute('src', GreekSalad);
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
  });

  test('renders the Pollo Pasta card', () => {
    const pastaImage = screen.getByAltText('Pasta');
    expect(pastaImage).toBeInTheDocument();
    expect(pastaImage).toHaveAttribute('src', Pasta);
    expect(screen.getByText('Pollo Pasta')).toBeInTheDocument();
  });

  test('renders the Lemon Cake card', () => {
    const lemonCakeImage = screen.getByAltText('Lemon Cake');
    expect(lemonCakeImage).toBeInTheDocument();
    expect(lemonCakeImage).toHaveAttribute('src', LemonCake);
    expect(screen.getByText('Lemon Cake')).toBeInTheDocument();
  });
});
