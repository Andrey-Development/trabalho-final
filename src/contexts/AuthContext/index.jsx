import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db, app } from '../../firebaseConnection';
import { equalTo, get, onValue, orderByChild, push, query, ref } from 'firebase/database';

// Criação do Contexto de Usuário
export const UserContext = createContext();

// Componente Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        nome: ''
        , email: ''
        , password: ''
    });

    return (
        <UserContext.Provider value={{ 
                user
                ,setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};