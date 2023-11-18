import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.paylaod,
        loading: false,
      };
    case GET_USER:
      return {
        user: action.paylaod,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.paylaod,
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        //make a copy of the state
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
