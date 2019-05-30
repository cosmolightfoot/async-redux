import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
