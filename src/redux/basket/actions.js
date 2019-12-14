import * as types from './types';

export const addToBasket = (id) => ({
  type: types.ADD_TO_BASKET,
  id
});

export const removeFromBasket = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  id
});

export const clearBasket = () => ({
  type: types.CLEAR_BASKET
});
