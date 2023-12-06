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
                    statusBarColor: '#179A93',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Ranking" 
                component={Ranking} 
                options={{
                    statusBarColor: '#179A93',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 28,
                    },
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;
