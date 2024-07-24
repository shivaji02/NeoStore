import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogNav from '../screens/logNav/LogNav';
import Homenavigator from '../screens/HomeNav/Homenavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigation = () => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with your logic to check if user is logged in

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator>
                    {isLoggedIn ? (
                        <Stack.Screen name="Home" options={{ headerShown: false }}  component={Homenavigator} />
                    ) : (
                        <Stack.Screen name="Login" component={LogNav} />
                    )}
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainNavigation;
