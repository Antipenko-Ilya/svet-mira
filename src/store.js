import { createStore, combineReducers } from 'redux';
import { basketReducer } from './redux/basket/reducer';

const initialStore = {};
const reducer = combineReducers({ basket: basketReducer });

export const store = createStore(reducer, initialStore);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addToBasket(3));
// store.dispatch(addToBasket(3));
// store.dispatch(addToBasket(5));
// store.dispatch(removeFromBasket(3));
// store.dispatch(removeFromBasket(5));
