// where here in this page head bar with title and a drawer to into 

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            {/* Head bar with title */}
            <View style={styles.headBar}>
                <TouchableOpacity onPress={() => console.log('Burger button pressed')}>
                    <Text style={styles.burgerButton}>☰</Text>
                </TouchableOpacity>
                <Text style={styles.title}>HomeScreen</Text>
            </View>

            {/* Drawer */}
            {/* Insert your drawer component here */}

            {/* 5 photo slider */}
            {/* Insert your photo slider component here */}

            {/* 4 square boxes */}
            {/* Insert your square boxes component here */}
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headBar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    burgerButton: {
        fontSize: 20,
        marginRight: 10,
        justifyContent: 'flex-start', // Align items left


    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'tomato',
        justifyContent:'center'
    },
});

export default DashboardScreen;
