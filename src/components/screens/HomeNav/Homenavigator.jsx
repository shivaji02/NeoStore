import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DashboardScreen from './DashboardScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Homenavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard"  options={{ headerShown: false }}  component={DashboardScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Homenavigator