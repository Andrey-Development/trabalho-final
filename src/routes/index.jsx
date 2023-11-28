import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';

function Routes() {

    return (
        <NavigationContainer
            style={{
                backgroundColor: '#3c3c3c',
            }}
        >
            <AppRoutes />
        </NavigationContainer>
    )
}

export default Routes

