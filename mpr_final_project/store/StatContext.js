import React, { createContext, useReducer, useContext } from 'react';

// Define the context
const StatContext = createContext();

// Initial state for the stats
const initialState = {
  happy: 100,
  health: 100,
  smart: 30,
  look: 20,
  bankBalance: 0 // Assuming you want to manage bank balance as well
};

// Actions types
const MODIFY_STATS = 'MODIFY_STATS';
const UPDATE_BANK_BALANCE = 'UPDATE_BANK_BALANCE';
const SET_SUBJECT_PROGRESS = 'SET_SUBJECT_PROGRESS';
const RESET_SUBJECT_PROGRESS = 'RESET_SUBJECT_PROGRESS';

// Reducer to handle actions
function statReducer(state, action) {
  switch (action.type) {
    case MODIFY_STATS:
      return {
        ...state,
        happy: Math.max(0, state.happy + action.payload.happy),
        health: Math.max(0, state.health + action.payload.health),
        smart: Math.max(0, state.smart + action.payload.smart),
        look: Math.max(0, state.look + action.payload.look),
      };
    case UPDATE_BANK_BALANCE:
      return {
        ...state,
        bankBalance: state.bankBalance + action.payload.amount
      };
    case SET_SUBJECT_PROGRESS:
      // Assuming a structure for handling multiple subjects with progress
      return {
        ...state,
        subjectProgress: {
          ...state.subjectProgress,
          [action.payload.subject]: action.payload.progress
        }
      };
    case RESET_SUBJECT_PROGRESS:
      return {
        ...state,
        subjectProgress: {
          ...state.subjectProgress,
          [action.payload.subject]: 0
        }
      };
    default:
      return state;
  }
}

// Create a provider to wrap your application's component tree
export const StatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statReducer, initialState);

  // Function to modify stats
  const modifyStats = (changes) => {
    dispatch({ type: MODIFY_STATS, payload: changes });
  };

  // Function to update bank balance
  const modifyBankBalance = (amount) => {
    dispatch({ type: UPDATE_BANK_BALANCE, payload: { amount } });
  };

  // Function to set subject progress
  const setSubjectProgress = (subject, progress) => {
    dispatch({ type: SET_SUBJECT_PROGRESS, payload: { subject, progress } });
  };

  // Function to reset subject progress
  const resetSubjectProgress = (subject) => {
    dispatch({ type: RESET_SUBJECT_PROGRESS, payload: { subject } });
  };

  return (
    <StatContext.Provider value={{ 
      stats: state, 
      modifyStats, 
      modifyBankBalance, 
      setSubjectProgress, 
      resetSubjectProgress 
    }}>
      {children}
    </StatContext.Provider>
  );
};

// Custom hook to use the stat context
export const useStats = () => useContext(StatContext);
