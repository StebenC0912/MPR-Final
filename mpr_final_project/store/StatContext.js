import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the context
const StatContext = createContext();

// Initial state for the stats and time
const initialState = {
  happy: 100,
  health: 100,
  smart: 30,
  look: 20,
  bankBalance: 0, // Manage bank balance
  age: 0, // Added age to manage character age
  time: 0 // Added time to manage game time in hours
};

// Action types for context updates
const MODIFY_STATS = 'MODIFY_STATS';
const UPDATE_BANK_BALANCE = 'UPDATE_BANK_BALANCE';
const INCREMENT_TIME = 'INCREMENT_TIME'; // New action for incrementing time
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
        look: Math.min(100, Math.max(0, state.look + action.payload.look)),
      };
    case UPDATE_BANK_BALANCE:
      return {
        ...state,
        bankBalance: state.bankBalance + action.payload
      };
    case INCREMENT_TIME:
      const newTime = state.time + action.payload;
      const newAge = state.age + Math.floor(newTime / 12) - Math.floor(state.time / 12);
      let newHealth = state.health;
      let newBankBalance = state.bankBalance;

      // Increment bank balance when reaching 18 years old
      if (newAge === 18) {
        newBankBalance += 10000; // adjust as necessary
      }

      // Decrement health by 2% for each year over 35
      if (newAge > 35) {
        newHealth *= 0.98; // Reduces health to 98% of previous value
      }

      return {
        ...state,
        time: newTime,
        age: newAge,
        health: Math.min(100, Math.max(0, newHealth)),
        bankBalance: newBankBalance
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

  const modifyStats = (changes) => {
    dispatch({ type: MODIFY_STATS, payload: changes });
  };

  const modifyBankBalance = (amount) => {
    dispatch({ type: UPDATE_BANK_BALANCE, payload: amount });
  };

  const incrementTime = (minutes) => {
    dispatch({ type: INCREMENT_TIME, payload: minutes });
  };
  const incrementAge = () => {
    dispatch({ type: INCREMENT_AGE });
  };
  // Simulate a game timer
  useEffect(() => {
    const interval = setInterval(() => {
      incrementTime(0.083); // Increment time by 5 minutes each interval
    }, 5000); // Interval set to real time 5 seconds for simulation
    return () => clearInterval(interval);
  }, []);

  return (
    <StatContext.Provider value={{
      stats: state,
      modifyStats,
      modifyBankBalance,
      incrementTime,
      incrementAge
    }}>
      {children}
    </StatContext.Provider>
  );
};

// Custom hook for easy context usage
export const useStats = () => useContext(StatContext);
