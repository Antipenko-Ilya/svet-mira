import * as types from './types';

export function basketReducer(state = [], action) {
  if (action.type === types.CLEAR_BASKET) {
    return [];
  }
  if (action.type === types.ADD_TO_BASKET) {
    const item = state.find(({ id }) => id === action.id);

    if (item) {
      return state.map(x => x.id === item.id ? {id: x.id, count: x.count + 1} : x);
    }
    
    return [...state, { id: action.id, count: 1 }];
  }
  return state;
}
