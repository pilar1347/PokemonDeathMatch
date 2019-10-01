import styled from 'styled-components';
import { Button, ButtonWrapper } from '../Pokemon.styles';

export const Ring = styled.div`
  width: 900px;
  display: flex;
  margin: 10px auto;
  justify-content: center;
`;

export const FightButton = styled(Button)`
  width: 200px;
  margin: 0 5px;
`;

export const ClearButton = styled(Button)`
  background: ${p => p.theme.carvana.white.primary};
  color: ${p => p.theme.carvana.blue.dark};
  width: 200px;
  margin: 0 5px;
  &:hover {
    background: #efefef;
  }
`;

export const FightButtonWrapper = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
  width: 900px;
  margin: 10px auto;
`;

export const WinnerName = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
