import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadCartRequest: null,
  loadCartSuccess: ['data'],
  loadCartFailure: null,
  addProductRequest: ['product'],
  addProductSuccess: ['product'],
  addProductFailure: null,
  setAmountProduct: ['id', 'amount'],
});

export const CartTypes = Types;
export default Creators;

/**
 * Inital State
 */
const INITIAL_STATE = Immutable({
  data: [],
  subtotal: 0,
  amountProduct: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CART_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.ADD_PRODUCT_SUCCESS]: (state, { product }) => state.merge({
    data: [...state.data, product],
    subtotal: state.subtotal + product.price,
  }),
  [Types.SET_AMOUNT_PRODUCT]: (state, { id, amount }) => {
    if (state.amountProduct) {
      state.amountProduct.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount,
          };
        }

        return item;
      });
    } else {
      state.amountProduct.push({ id, amount });
    }

    return state;
  },
});
