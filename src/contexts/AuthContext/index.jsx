import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db, app } from '../../firebaseConnection';
import { equalTo, get, onValue, orderByChild, push, query, ref } from 'firebase/database';

// Criação do Contexto de Usuário
export const UserContext = createContext();

// Componente Provider
export const UserProvider = ({ children }) => {
    // dados fixos api
    const apiUrl = 'https://opentdb.com/api.php';
    const categoryParam = 'category=18';
    const typeParam = 'type=multiple';
    // variaveis de estado
    const [loading, setLoading] = useState();
    const [user, setUser] = useState({
        name: ''
        ,email: ''
        ,numberQuestion: "10"
        ,dificulty: 'easy'
    });
    // funções
    const buildApiUrl = () => {
        // fazer fecth deste link
        console.log('TESTEEEEE:', `${apiUrl}?amount=${user.numberQuestion}&${categoryParam}&difficulty=${user.dificulty}&${typeParam}`);
        // transformar response em json
    };

    return (
        <UserContext.Provider value={{ 
                user
                ,setUser
                ,loading
                ,setLoading
                ,buildApiUrl
            }}
        >
            {children}
        </UserContext.Provider>
    );
};