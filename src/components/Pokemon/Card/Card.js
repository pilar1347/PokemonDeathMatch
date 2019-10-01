import React from 'react';
import PropTypes from 'prop-types';
import {
  PokemonCard
} from './Card.styles';

const Card = ({
  update,
  guy
}) => {
  const { name, sprites } = guy;
  return (
    <PokemonCard onClick={() => update(guy)} data-test="card">
      <p>{name}</p>
      <img src={sprites.front_default} alt={name} />
    </PokemonCard>
  );
};

Card.propTypes = {
  update: PropTypes.func.isRequired,
  guy: PropTypes.shape({}).isRequired
};

export default Card;
