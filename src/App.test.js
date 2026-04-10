import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD text', () => {
  render(<App />);
  const element = screen.getByText(/CI\/CD React App/i);
  expect(element).toBeInTheDocument();
});