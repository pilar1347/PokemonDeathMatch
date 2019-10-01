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

  return (
    <PokemonCard onClick={() => update(guy)} data-testid="card">
      <p>{name}</p>
      <img src={sprites.front_default} alt={name} />
    </PokemonCard>
  );
};

Card.defaultProps = {
  contenders: [],
  update: f => f
};

Card.propTypes = {
  update: PropTypes.func,
  guy: PropTypes.shape({}).isRequired,
  contenders: PropTypes.arrayOf(
    PropTypes.shape({})
  )
};

export default Card;
