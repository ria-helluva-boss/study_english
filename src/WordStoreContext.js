import React, { createContext, useContext } from 'react';
import { wordStore } from './WordStore';

const WordStoreContext = createContext(null);

const WordStoreProvider = ({children}) => (
    <WordStoreContext.Provider value = {{wordStore}}>
        {children}
    </WordStoreContext.Provider>
);

const useStore = () => useContext(WordStoreContext);

export { WordStoreProvider, useStore };