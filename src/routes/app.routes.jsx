import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NewTask from '../pages/NewTask';

const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    statusBarColor: '#179A93',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Lista de Tarefas',
                    statusBarColor: '#179A93',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                }}
            />
            <Stack.Screen
                name="NewTask"
                component={NewTask}
                options={{
                    statusBarColor: '#179A93',
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
