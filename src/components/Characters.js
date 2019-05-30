import React from 'react';
import PropTypes from 'prop-types';

function Characters({ characters }) {

}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.name.isRequired
  })).isRequired
};

export default Characters;
