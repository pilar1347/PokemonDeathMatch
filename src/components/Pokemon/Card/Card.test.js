import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@carvana/theme';
import Card from './Card';

describe('Card', () => {
  const update = jest.fn();
  const guy = {
    name: 'ivysaur',
    sprites: { front_default: '' }
  };
  const contenders = [
    guy,
    {
      name: 'bulbasaur',
      sprites: { front_default: '' }
    }
  ];

  const renderCard = (props = {}) => render(
    <ThemeProvider>
      <Card {...props} />
    </ThemeProvider>
  );

  it('Should render pokemon name', () => {
    const { getByText } = renderCard({
      update,
      guy
    });
    expect(getByText('ivysaur')).toBeTruthy();
  });
});
