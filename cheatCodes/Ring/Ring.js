import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fighter from '../Fighter';
import {
  Ring,
  FightButton,
  ClearButton,
  FightButtonWrapper,
  WinnerName
} from './Ring.styles';
import PickWinner from './FightLogic';

const Fight = ({ contenders, clear }) => {
  const [winner, setWinner] = useState('');
  const shouldDisableButtons = contenders.length === 0;

  const chooseWinner = () => {
    setWinner(PickWinner(contenders).name);
  };

  return (
    <>
      {winner && <WinnerName data-testid="winner-name">The winner is {winner}!</WinnerName>}
      <Ring data-testid="fight-ring">
        {contenders.length ? contenders.map(guy => {
          return <Fighter guy={guy} key={guy.name} />;
        }) : (
          <p data-testid="intro-text">Please select some dudes.</p>
        )}
      </Ring>
      <FightButtonWrapper>
        <ClearButton data-testid="clear-button" onClick={clear}>Clear</ClearButton>
        {/* <ClearButton data-testid="clear-button" onClick={clear} disabled={shouldDisableButtons}>
          Clear
        </ClearButton> */}
        <FightButton data-testid="fight-button">Fight!</FightButton>
        {/* <FightButton data-testid="fight-button" disabled={shouldDisableButtons}>Fight!</FightButton> */}
        {/* <FightButton
          data-testid="fight-button"
          disabled={shouldDisableButtons}
          onClick={chooseWinner}
        >
          Fight!
        </FightButton> */}
      </FightButtonWrapper>
    </>
  );
};

Fight.defaultProps = {
  clear: f => f
};

Fight.propTypes = {
  contenders: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  clear: PropTypes.func.isRequired
};

export default Fight;
