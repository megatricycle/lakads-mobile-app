import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showDropdown: null,
  hideDropdown: null
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isDropdownOpen: false
});

/* ------------- Reducers ------------- */

// request the data from an api
export const showDropdown = (state) =>
  state.merge({ isDropdownOpen: true });

export const hideDropdown = (state) =>
  state.merge({ isDropdownOpen: false });
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_DROPDOWN]: showDropdown,
  [Types.HIDE_DROPDOWN]: hideDropdown
});
