// StatContext.js
import React, { createContext, useState, useContext } from 'react';

const StatContext = createContext();

export const useStats = () => useContext(StatContext);

export const StatProvider = ({ children }) => {
    const [stats, setStats] = useState({
        happy: 100,
        health: 100,
        smart: 30,
        look: 20,
    });

    const modifyStats = (changes) => {
        setStats(currentStats => ({
            happy: Math.max(0, currentStats.happy + (changes.happy || 0)),
            health: Math.max(0, currentStats.health + (changes.health || 0)),
            smart: Math.max(0, currentStats.smart + (changes.smart || 0)),
            look: Math.max(0, currentStats.look + (changes.look || 0)),
        }));
    };

    return (
        <StatContext.Provider value={{ stats, modifyStats }}>
            {children}
        </StatContext.Provider>
    );
};
