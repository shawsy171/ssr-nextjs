import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data';

// initial state
const startState = {
  cards: [],
}

// Actions
export const initialCards = () => (
  { 
    type: 'INITIAL_CARDS',
    cards: data,
  }
)

export const  addItem = (item) => (
  {
    type: 'ADD_ITEM',
    item,
  }
)

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_CARDS':
      return { cards: action.cards };

    case 'ADD_ITEM':
      return {
        ...state,
        cards: [ state.cards, action.item ],
      };
    
    default:
      return state;
  }
}

export const initStore = (initialState = startState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}