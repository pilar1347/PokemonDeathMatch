import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@carvana/theme';
import Card from './Card';

describe('Card', () => {
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
      guy
    });
    expect(getByText('ivysaur')).toBeTruthy();
  });

  it('Should show checkmark when selected by a user', () => {
    const { queryByTestId } = renderCard({ guy, contenders });

    expect(queryByTestId('checkmark')).toBeTruthy();
  });

  it('Should not show checkmark when not selected by a user', () => {
    const { queryByTestId } = renderCard({
      guy: {
        name: 'charmander',
        sprites: { front_default: '' }
      },
      contenders
    });
    expect(queryByTestId('checkmark')).toBeNull();
  });
});
