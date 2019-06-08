import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadProductRequest: ['id'],
  loadProductSuccess: ['data'],
  loadProductFailure: null,
});

export const ProductTypes = Types;
export default Creators;

/**
 * Inital State
 */
const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCT_SUCCESS]: (state, { data }) => state.merge({ data }),
});
