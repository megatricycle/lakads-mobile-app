import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userAssign: ['oauth_token', 'oauth_token_secret', 'oauth_verifier', 'screen_name'],
  logout: null
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoggedIn: false,
  oauth_token: null,
  oauth_token_secret: null,
  oauth_verifier: null,
  screen_name: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const userAssign = (state, {oauth_token, oauth_token_secret, oauth_verifier, screen_name}) => {
  return state.merge({
    isLoggedIn: true,
    oauth_token: oauth_token,
    oauth_token_secret: oauth_token_secret,
    oauth_verifier: oauth_verifier,
    screen_name: screen_name
  });
};

export const logout = (state) => {
  return state.merge({
    isLoggedIn: false,
    oauth_token: null,
    oauth_token_secret: null,
    oauth_verifier: null,
    screen_name: null
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_ASSIGN]: userAssign,
  [Types.LOGOUT]: logout
});
