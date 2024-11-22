import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react'; // En lugar de react-dom/test-utils
import App from './App';


test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});