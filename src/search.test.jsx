import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Daydetails from './components/Daydetails';




test('renders "Search" as a text', () => {

  render
  (<Daydetails />);
  const searchElement = screen.getByText('Submit');

  expect(searchElement).toBeInTheDocument();
});

test('should the button have attribute submit', () => {
    render(<Daydetails />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('should the input has a place holder, Type City Name HERE ', () => {
    render(<Daydetails/>);
    const placeHolder = screen.getByPlaceholderText(/Type City Name HERE/i);
    expect(placeHolder).toBeInTheDocument();
  });

  test('includes an input fields and a submit button with text Search', () => {
    render(<Daydetails />);
    const inputfield = screen.getByLabelText('City');
    expect(inputfield).toBeInTheDocument();
  });

  test('button has correct color before and after click', () => {
    render(<Daydetails />);
    const colorButton = screen.getByRole('button', 'search');
    expect(colorButton).toHaveStyle({ backgroundcolor: rgba(196, 255, 216, 0.018});
    userEvent.hover(colorButton);
    expect(colorButton).toHaveStyle({ Color: 'gray' });
    expect(colorButton).toHaveTextContent('Search');
  });