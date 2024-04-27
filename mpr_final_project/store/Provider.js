import React from 'react';
import { StatProvider, SchoolProvider } from './StatContext';

export const CombinedProvider = ({ children }) => (
    <StatProvider>
        <SchoolProvider>
            {children}
        </SchoolProvider>
    </StatProvider>
);