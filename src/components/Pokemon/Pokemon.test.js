import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@carvana/theme';
import * as services from '../../services';
import Pokemon from './Pokemon';

describe('Pokemon', () => {
  services.fetchPokemon = jest.fn(() => ({
    results: [
      {
        name: 'bulbasaur',
        sprites: [
          { front_default: '' }
        ]
      },
      {
        name: 'ivysaur',
        sprites: [
          { front_default: '' }
        ]
      },
    ],
    prev: 'prev-url',
    next: 'next-url'
  }));

  const renderPokemon = () => render(
    <ThemeProvider>
      <Pokemon />
    </ThemeProvider>
  );

  beforeEach(() => {
    services.fetchPokemon.mockClear();
  });

  it('Should render loader while loading pokemon', () => {
    const { container } = renderPokemon();
    expect(
      container.querySelector('[data-test="loader"]')
    ).toBeDefined();
  });

  it('Should render pokemon cards', async () => {
    const { container } = await renderPokemon();
    expect(
      container.querySelectorAll('[data-test="card"]').length
    ).toBe(2);
  });

  it('Should get next page of pokemon', async () => {
    const { getByText } = await renderPokemon();
    fireEvent.click(getByText('Next'));
    expect(services.fetchPokemon).toHaveBeenCalledWith('next-url');
  });

  it('Should get prev page of pokemon', async () => {
    const { getByText } = await renderPokemon();
    fireEvent.click(getByText('Prev'));
    expect(services.fetchPokemon).toHaveBeenCalledWith('prev-url');
  });
});
