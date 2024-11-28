import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders more than one player on the page', () => {
    render(<App />);
    
    const jugadores = screen.getAllByRole('heading', { level: 2 });
    expect(jugadores.length).toBeGreaterThanOrEqual(4);
  });

  test('all players in the list have a name', () => {
    render(<App />);

    // Obtener todos los jugadores renderizados
    const jugadores = screen.getAllByRole('heading', { level: 2 });

    // Verificar que cada jugador tiene un nombre
    jugadores.forEach((jugador) => {
      expect(jugador.textContent).not.toBe('');
    });
  });

});
