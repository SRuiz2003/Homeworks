import React, { useReducer } from 'react';
import { UserContext } from "../context/userContext";


const initialState = {
  isLoggedIn: false,
  username: '',
  lastVisitedPage: '/'
};

function reducer(state, action) {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        username: ''
      };
    case 'SET_LAST_VISITED':
      return {
        ...state,
        lastVisitedPage: action.payload.page
      };
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
