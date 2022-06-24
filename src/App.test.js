import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders description', () => {
  render(<App />);
  expect(screen.getByText('Dragatron.')).toBeInTheDocument();
  expect(screen.getByText('SIGN UP AS A')).toBeInTheDocument();
  expect(screen.getByText('STEP 3/4')).toBeInTheDocument();
  expect(screen.getByText('With 3 Types of memberships,')).toBeInTheDocument();
});
