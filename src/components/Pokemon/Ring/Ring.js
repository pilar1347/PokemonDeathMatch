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
import FightLogic from './FightLogic';

const Fight = ({ contenders, clear }) => {
  const shouldShowClearButton = contenders.length > 0;
  const shouldShowFightButton = contenders.length >= 2;
  const [winner, useWinner] = useState('');

  const fight = () => {
    const fightResults = FightLogic(contenders);
    useWinner(fightResults);
  };

  return (
    <>
      {winner && <WinnerName data-testid="winner">{winner} is the Champion!</WinnerName>}
      <Ring data-testid="fight-ring">
        {contenders.length ? contenders.map(guy => {
          return <Fighter guy={guy} key={guy.name} />;
        }) : (
          <p data-testid="intro-text">Please select some dudes.</p>
        )}
      </Ring>
      <FightButtonWrapper>
        {shouldShowClearButton && <ClearButton data-testid="clear-button" onClick={clear}>Clear</ClearButton>}
        {shouldShowFightButton && <FightButton data-testid="fight-button" onClick={fight}>Fight!</FightButton>}
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
