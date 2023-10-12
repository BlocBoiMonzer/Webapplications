import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter and increments value on button click', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/click me/i);
  
  // Initial state
  expect(getByText(/you clicked 0 times/i)).toBeInTheDocument();

  // After one click
  fireEvent.click(button);
  expect(getByText(/you clicked 1 times/i)).toBeInTheDocument();

  // After two clicks
  fireEvent.click(button);
  expect(getByText(/you clicked 2 times/i)).toBeInTheDocument();
});