import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../bookingform';

const mockDispatch = jest.fn();
const availableTimes = ['18:00', '18:30', '19:00', '19:30', '20:00'];

describe('BookingForm Component', () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
  });

  test('renders the form title', () => {
    const titleElement = screen.getByText('Book Your Reservation');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the date input field', () => {
    const dateInput = screen.getByLabelText('Date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('renders the guests input field', () => {
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('renders the occasion select field with options', () => {
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toBeInTheDocument();
    expect(screen.getByText('Select an occasion')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });

  test('calls dispatch with correct data when form is submitted', () => {
    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Submit reservation');

    fireEvent.change(dateInput, { target: { value: '2023-05-27' } });
    fireEvent.change(timeSelect, { target: { value: '19:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE', date: '2023-05-27' });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'RESERVE', payload: '19:00' });
  });
});
