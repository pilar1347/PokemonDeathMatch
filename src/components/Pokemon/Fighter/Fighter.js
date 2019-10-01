import React from 'react';
import PropTypes from 'prop-types';
import {
  FighterImage,
  FighterWrapper,
  FighterName
} from './Fighter.styles';

const Fighter = ({ guy }) => {
  return (
    <FighterWrapper>
      <FighterImage>
        <img src={guy.sprites.front_default} alt={guy.name} />
      </FighterImage>
      <FighterName>{guy.name}</FighterName>
    </FighterWrapper>
  );
};

Fighter.propTypes = {
  guy: PropTypes.shape({}).isRequired
};

export default Fighter;
