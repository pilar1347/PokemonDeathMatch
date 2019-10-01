import React from 'react';
import PropTypes from 'prop-types';
import Fighter from '../Fighter';
import {
  Ring,
  FightButton,
  ClearButton,
  FightButtonWrapper,
  WinnerName
} from './Ring.styles';

const Fight = ({ contenders, clear }) => {
  return (
    <>
      <Ring data-testid="fight-ring">
        {contenders.length ? contenders.map(guy => {
          return <Fighter guy={guy} key={guy.name} />;
        }) : (
          <p data-testid="intro-text">Please select some dudes.</p>
        )}
      </Ring>
      <FightButtonWrapper>
        <ClearButton data-testid="clear-button" onClick={clear}>Clear</ClearButton>
        <FightButton data-testid="fight-button">Fight!</FightButton>
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
