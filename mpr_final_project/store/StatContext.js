import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the context
const StatContext = createContext();

// Initial state for the stats
const initialState = {
  happy: 100,
  health: 100,
  smart: 30,
  look: 20,
  bankBalance: 0,
  age: 0
};

// Action types for context updates
const MODIFY_STATS = 'MODIFY_STATS';
const UPDATE_BANK_BALANCE = 'UPDATE_BANK_BALANCE';
const INCREMENT_AGE = 'INCREMENT_AGE';

// Reducer to handle actions
function statReducer(state, action) {
  switch (action.type) {
    case MODIFY_STATS:
      return {
        ...state,
        happy: Math.min(100, Math.max(0, state.happy + action.payload.happy)),
        health: Math.min(100, Math.max(0, state.health + action.payload.health)),
        smart: Math.min(100, Math.max(0, state.smart + action.payload.smart)),
        look: Math.min(100, Math.max(0, state.look + action.payload.look))
      };
    case UPDATE_BANK_BALANCE:
      return {
        ...state,
        bankBalance: state.bankBalance + action.payload
      };
    case INCREMENT_AGE:
      return {
        ...state,
        age: state.age + 1
      };
    default:
      return state;
  }
}


// Provider to encapsulate global state
export const StatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statReducer, initialState);

  // Functions to dispatch actions
  const modifyStats = (changes) => {
    dispatch({ type: MODIFY_STATS, payload: changes });
  };

  const modifyBankBalance = (amount) => {
    dispatch({ type: UPDATE_BANK_BALANCE, payload: amount });
  };

  const incrementAge = () => {
    dispatch({ type: INCREMENT_AGE });
  };

  return (
    <StatContext.Provider value={{
      stats: state,
      modifyStats,
      modifyBankBalance,
      incrementAge
    }}>
      {children}
    </StatContext.Provider>
  );
};

// Custom hook for easy context usage
export const useStats = () => useContext(StatContext);
