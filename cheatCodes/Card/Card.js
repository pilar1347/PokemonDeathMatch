import React from 'react';
import PropTypes from 'prop-types';
import {
  PokemonCard,
  Check
} from './Card.styles';

const Card = ({
  update,
  guy,
  contenders
}) => {
  const { name, sprites } = guy;
  // const isContender = contenders.find(contender => {
  //   return contender.name === name;
  // });

  return (
    <PokemonCard onClick={() => update(guy)} data-testid="card">
      <p>{name}</p>
      <img src={sprites.front_default} alt={name} />
      {/* {isContender && <Check data-testid="checkmark" />} */}
    </PokemonCard>
  );
};

Card.defaultProps = {
  contenders: []
};

Card.propTypes = {
  update: PropTypes.func.isRequired,
  guy: PropTypes.shape({}).isRequired,
  contenders: PropTypes.arrayOf(
    PropTypes.shape({})
  )
};

export default Card;
