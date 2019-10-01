import React from 'react';
import PropTypes from 'prop-types';
import Fighter from './Fighter';
import {
  Ring,
  FightButton
} from './Fight.styles';

const Fight = ({ contenders }) => {
  return (
    <>
      <Ring>
        {contenders.length ? contenders.map(guy => {
          return <Fighter guy={guy} key={guy.name} />;
        }) : (
          <p>Please select some dudes.</p>
        )}
      </Ring>
      <FightButton data-test="fight-button">Fight!</FightButton>
    </>
  );
};

Fight.propTypes = {
  contenders: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Fight;
