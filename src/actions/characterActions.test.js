import { fetchCharacters, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS } from './characterActions';

jest.mock('../services/getCharacters.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters action', () => {
  it('dispatches a loading action and a fetch characters action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
