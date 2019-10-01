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

  // it('Should render disabled fight button if there are no contenders', () => {
  //   const { queryByTestId } = renderRing({
  //     contenders: []
  //   });

  //   expect(
  //     queryByTestId('fight-button').getAttribute('disabled')
  //   ).not.toBeNull();
  // });


  it('Should render disabled clear button if there are no contenders', () => {
    const { queryByTestId } = renderRing({
      contenders: []
    });

    expect(
      queryByTestId('clear-button').getAttribute('disabled')
    ).not.toBeNull();
  });
});
