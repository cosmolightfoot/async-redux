import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const charactersList = characters.map(character => (
    <li key={character.id}>
      <Character character={character} />
    </li>
  ));
  
  return (
    <ul>
      {charactersList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.name.isRequired
  })).isRequired
};

export default Characters;
