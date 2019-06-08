import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  setError: 'message',
  hideError: null,
});

export const ErrorTypes = Types;
export default Creators;

/**
 * Inital State
 */
const INITIAL_STATE = Immutable({
  visible: false,
  message: null,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ERROR]: (state, { message }) => state.merge({ visible: true, message }),
  [Types.HIDE_ERROR]: state => state.merge({
    visible: false,
  }),
});
