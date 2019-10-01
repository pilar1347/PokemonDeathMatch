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
      {
        name: 'caterpie',
        sprites: [
          { front_default: '' }
        ]
      },
      {
        name: 'pidgey',
        sprites: [
          { front_default: '' }
        ]
      }
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

  it('Should render pokemon cards', async () => {
    const { queryAllByTestId } = await renderPokemon();
    expect(
      queryAllByTestId('card').length
    ).toBe(4);
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

  it('Should add and remove contenders', async () => {
    const { queryAllByTestId, getByText } = await renderPokemon();

    fireEvent.click(getByText('ivysaur'));
    expect(queryAllByTestId('fighter').length).toBe(1);

    fireEvent.click(getByText('Clear'));
    expect(queryAllByTestId('fighter').length).toBe(0);
  });

  // it('Should only allow up to 3 pokemon to be selected', async () => {
  //   const { queryAllByTestId } = await renderPokemon();
  //   const cards = queryAllByTestId('card');

  //   fireEvent.click(cards[0]);
  //   fireEvent.click(cards[1]);
  //   fireEvent.click(cards[2]);
  //   fireEvent.click(cards[3]);

  //   expect(
  //     queryAllByTestId('fighter').length
  //   ).toBe(3);
  // });

  // it('Should not allow same pokemon to be selected twice', async () => {
  //   const { queryAllByTestId } = await renderPokemon();
  //   const cards = queryAllByTestId('card');

  //   fireEvent.click(cards[0]);
  //   fireEvent.click(cards[0]);

  //   expect(
  //     queryAllByTestId('fighter').length
  //   ).toBe(1);
  // });
});
