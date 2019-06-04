import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('BEFORE NEXT', store.getState());
  next(action);
  console.log('AFTER NEXT', store.getState());
  console.log('ACTION', action);
};


function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI': return { hi: 'hello' };
      
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch({
  type: 'HI',
  payload: 'HELLO'
});
