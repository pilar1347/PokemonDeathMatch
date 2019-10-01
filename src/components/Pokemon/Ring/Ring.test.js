import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@carvana/theme';
import Ring from './Ring';

describe('Ring', () => {
  const contenders = [
    {
      name: 'ivysaur',
      sprites: { front_default: '' }
    },
    {
      name: 'bulbasaur',
      sprites: { front_default: '' }
    }
  ];

  const renderRing = (props = {}) => render(
    <ThemeProvider>
      <Ring {...props} />
    </ThemeProvider>
  );

  it('Should render prompt text if no selections', () => {
    const { queryByTestId } = renderRing({
      contenders: []
    });

    expect(
      queryByTestId('intro-text')
    ).toBeTruthy();
  });

  it('Should render contenders in ring', () => {
    const { getByText } = renderRing({ contenders });

    expect(getByText('ivysaur')).toBeTruthy();
  });

  it('Should hide fight button if less than 2 contenders', () => {
    const { queryByTestId } = renderRing({
      contenders: [{
        name: 'ivysaur',
        sprites: { front_default: '' }
      }]
    });

    expect(queryByTestId('fight-button')).toBeNull();
  });

  it('Should show fight button when 2 or more pokemon are contenders', () => {
    const { queryByTestId } = renderRing({ contenders });

    expect(queryByTestId('fight-button')).toBeTruthy();
  });

  it('Should hide clear button if no contenders are selected', () => {
    const { queryByTestId } = renderRing({ contenders: [] });

    expect(queryByTestId('clear-button')).toBeNull();
  });

  it('Should not display winner name before fight', () => {
    const { queryByTestId } = renderRing({ contenders });

    expect(queryByTestId('winner')).toBeNull();
  });

  it('Should display winner name after fight', () => {
    const { queryByTestId } = renderRing({ contenders });
    fireEvent.click(queryByTestId('fight-button'));

    expect(queryByTestId('winner')).toBeTruthy();
  });
});
