/** @format */

import React, { createContext, useContext, useReducer } from "react";

// create a new context named stateProvider
//  this context will be used to manage and share state across components
const stateProvider = createContext();

//  defining a custom copmonent for manage state
const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <stateProvider.Provider value={useReducer(reducer, initialState)}>
            {children}
        </stateProvider.Provider>
    );
};

//  create a custom hook to easily access state and dispatch
export const useStateValue = () => useContext(stateProvider);
export default StateProvider;
