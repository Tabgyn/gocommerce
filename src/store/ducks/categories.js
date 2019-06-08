import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
  setCurrent: ['id'],
  setCategory: ['category'],
});

export const CategoryTypes = Types;
export default Creators;

/**
 * Inital State
 */
const INITIAL_STATE = Immutable({
  data: [],
  currentCategory: 1,
  categoryProducts: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.SET_CATEGORY]: (state, { category }) => state.merge({
    currentCategory: category.id,
    categoryProducts: category.products,
  }),
});
