import { createStore, applyMiddleware } from 'redux';




function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI': return { hi: 'hello' };
      
    default: return state;
  }
}

const store = createStore(reducer);
