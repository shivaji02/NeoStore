import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './loginScreen';
import ForgotPasswordScreen from './forgotPasswordScreen';
import RegisterUserScreen from './registerUserScreen';
const Stack = createStackNavigator();

const LogNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Register" component={RegisterUserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default LogNav;