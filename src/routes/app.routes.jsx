import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Ranking from '../pages/Ranking';

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{ 
                    title: 'Cadastrar',
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                    },
                    headerTintColor: '#f1f1fa',
                    statusBarColor: '#2a2a2a',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                }}
            />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    title: 'Lista de Tarefas',
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                    },
                    headerTintColor: '#f1f1fa',
                    statusBarColor: '#2a2a2a',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                }}
            />
            <Stack.Screen 
                name="Ranking" 
                component={Ranking} 
                options={{ 
                    title: 'Ranking',
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                    },
                    headerTintColor: '#f1f1fa',
                    statusBarColor: '#2a2a2a',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;
