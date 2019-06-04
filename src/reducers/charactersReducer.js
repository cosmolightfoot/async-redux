import { FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';


const initialState = {
  loading: false,
  error: null,
  list: []
};

export default function characterReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
      
    case FETCH_CHARACTERS_ERROR: 
      return { ...state, loading: false, error: action.payload };

    case FETCH_CHARACTERS: 
      return { ...state, loading: false, error: null, list: action.payload }

    default: 
      return state;
  }
}
