import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadCartRequest: null,
  loadCartSuccess: ['data'],
  loadCartFailure: null,
  updateCartSuccess: ['data'],
  updateCartFailure: null,
  addProductRequest: ['product'],
  updateProductRequest: ['id', 'quantity'],
  removeProductRequest: ['id'],
});

export const CartTypes = Types;
export default Creators;

/**
 * Inital State
 */
const INITIAL_STATE = Immutable({
  data: [],
  subtotal: 0,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CART_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.UPDATE_CART_SUCCESS]: (state, { data }) => {
    let newSubtotal = 0;

    data.map((item) => {
      newSubtotal += item.price * item.quantity;

      return item;
    });

    return state.merge({ data, subtotal: Math.round(newSubtotal * 100) / 100 });
  },
});
