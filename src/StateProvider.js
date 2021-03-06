import React, { createContext, useContext, useReducer } from "react";

//Setup Data Layer
//This is the Data Layer
export const StateContext =createContext();

//Build a Provider
export const StateProvider = ({reducer, initialState , children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside a component

export const useStateValue =() => useContext(StateContext)