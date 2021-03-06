import React from 'react';
import Logo from './Logo';
import { HeaderWrapper, Bar } from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <Bar>
      <Logo />
    </Bar>
  </HeaderWrapper>
);

export default Header;
