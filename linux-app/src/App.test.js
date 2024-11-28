import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders more than one player on the page', () => {
    render(<App />);
    
    const jugadores = screen.getAllByRole('heading', { level: 2 });
    expect(jugadores.length).toBeGreaterThanOrEqual(3);
  });
});
