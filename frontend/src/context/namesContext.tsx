'use client'; // Indica que este es un Client Component

import React, { createContext, useContext, useState } from 'react';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

const config: Config = {
    dictionaries: [names, names],
    separator: " ",
    length: 2,
};

type NamesContextType = {
    names: string[];
    generateNames: (count: number) => void;
};

const NamesContext = createContext<NamesContextType | undefined>(undefined);

export function NamesProvider({ children }: { children: React.ReactNode }) {
    const [names, setNames] = useState<string[]>([]);

    const generateNames = (count: number) => {
        const newNames = Array.from({ length: count }, () => uniqueNamesGenerator(config));
        setNames(newNames);
        console.log(names)
    };
    

    return (
        <NamesContext.Provider value={{ names, generateNames }}>
            {children}
        </NamesContext.Provider>
    );
}

export function useNames() {
    const context = useContext(NamesContext);
    if (!context) {
        throw new Error('useNames debe usarse dentro de un NamesProvider');
    }
    return context;
}