import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Importa act desde React
import App from './App';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
});