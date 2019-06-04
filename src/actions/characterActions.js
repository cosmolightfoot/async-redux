import { getCharacters } from '../services/getCharacters';
import { createAction } from 'promise-middleware-redux';

// export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
// export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
// export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

// export const fetchCharacters = () => dispatch => {
//   dispatch({
//     type: FETCH_CHARACTERS_LOADING
//   });

//   return getCharacters()
//     .then(characters => {
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: characters
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: FETCH_CHARACTERS_ERROR,
//         payload: err
//       });
//     });
// };

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  _,
  FETCH_CHARACTERS_ERROR
] = createAction('FETCH_CHARACTERS', getCharacters);
