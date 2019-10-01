import React from 'react';
import PropTypes from 'prop-types';

const Fighter = ({ guy }) => {
  return (
    <div>{guy.name}</div>
  );
};

Fighter.propTypes = {
  guy: PropTypes.shape({}).isRequired
};

export default Fighter;
