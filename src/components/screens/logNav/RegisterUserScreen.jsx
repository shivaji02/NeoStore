import React, { isValidElement } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert,ScrollView,Keyboard ,KeyboardAvoidingView} from 'react-native'
import styles from '../../../styles'
import  { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';
import { Platform } from 'react-native';
import {regUser} from '../../../api';

const RegisterUserScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleInputChange = (name, value) => {
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const { first_name, last_name, email, password, confirm_password } = userData;

    const [isSelected, setSelection] = useState(false);
    const radioButtonsData = useMemo(() => ([
        {
            id: '1',
            label :'male',
            value :'Male',
        },
        {
            id: '2',
            label:'female',
            value:'Female',
        }
    ]),[]);
    const [selectedId, setSelectedId] = useState();
    const [errorMessage, setErrorMessage] = useState(''); // Add errorMessage state variable

    const handleRegister = async () => {
        const userData ={
            first_name,
            last_name,
            email,
            password,
            confirm_password,
            gender,
            phone_no,
        };

        try{
            const response = await regUser(userData);
            Alert.alert('Success', response.message);
        }
        catch(error){
            Alert.alert('Error', error.message);
        }
    };

    return (
        <KeyboardAvoidingView style={{enabled:'true',keyboardVerticalOffset:2}}>
            <ScrollView> 
            <View style={styles.container}>
            <Text style={styles.title}>NeoSTORE</Text>
                    
            <TextInput style={styles.input} placeholder='First Name' onChangeText={text => {
                if (/^[a-zA-Z]+$/.test(text)) {
                    // Valid input
                } else {
                    setErrorMessage('Invalid input! Please enter only letters.');
                }
            }} />
        
            <TextInput style={styles.input} placeholder='Last Name' onChangeText={text => {
                if (/^[a-zA-Z]+$/.test(text)) {
                    // Valid input
                } else {
                    setErrorMessage('Invalid input! Please enter only letters.');
                }
            }} />
        
            <TextInput style={styles.input} placeholder='Email' onChangeText={text => {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(text)) {
                    // Valid input
                } else {
                    setErrorMessage('Invalid input! Please enter a valid email address.');
                }
            }} />
        
            <TextInput style={styles.input} placeholder='Password' secureTextEntry onChangeText={text => {
                if (/^[a-zA-Z0-9]+$/.test(text)) {
                    // Valid input
                } else {
                    setErrorMessage('Invalid input! Please enter only letters and numbers.');
                }
            }} />
        
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry onChangeText={text => {
                if (/^[a-zA-Z0-9]+$/.test(text)) {
                    // Valid input
                    
                } else {
                    setErrorMessage('Invalid input! Please enter only letters and numbers.');
                }
            }} />

            {/* <Text> Gender</Text> */}
            <RadioGroup radioButtons={radioButtonsData} onPress={radioButtonsData => setSelectedId(radioButtonsData)} style={styles.radioB} />

            <TextInput style={styles.input} placeholder='Phone Number' onChangeText={text => {
                if (/^[0-9]+$/.test(text)) {
                    // Valid input
                } else {
                    setErrorMessage('Invalid input! Please enter only numbers.');
                }
            }} />
            {/* <CheckBox 
                    disabled={false}
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}/> */}
            <View style={styles.checkboxView}>
                {Platform.OS === 'android' && (
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                )}
            </View>
            <Text>Agree to terms and conditions</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleRegister}>Register</Text>
            </TouchableOpacity>

            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
        </View>
        </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default RegisterUserScreen;
