import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <>
      <img src={character.imageUrl} />
      <h3>{character.name}</h3>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
