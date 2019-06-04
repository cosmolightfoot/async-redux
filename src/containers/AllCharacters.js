import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCharactersSelector,
  getCharactersLoading,
  getCharactersError
} from '../selectors/characterSelectors';
import Characters from '../components/Characters';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    characters: PropTypes.array.isRequired
  };

  componentDidMount() {
    console.log('LOG');
    this.props.fetch();
  }

  render() {
    const { loading, characters, error } = this.props;
    if(loading) return <h1>LOADING</h1>;
    if(error) return <h1>ERROR</h1>;

    return (
      <Characters characters={characters} />
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharactersSelector(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
