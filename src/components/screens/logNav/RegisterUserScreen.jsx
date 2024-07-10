import React, { isValidElement } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../../styles'
import  { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';
import { Platform } from 'react-native';

const RegisterUserScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const radioButtonsData = useMemo(() => ([
        {
            id: '1',
            label :'male',
            value :'male',
        },
        {
            id: '2',
            label:'female',
            value:'FFemale',
        }
    ]),[]);
    const [selectedId, setSelectedId] = useState();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>NeoSTORE</Text>
                    
            <TextInput style={styles.input} placeholder='First Name' />
        
            <TextInput style={styles.input} placeholder='Last Name' />
        
            <TextInput style={styles.input} placeholder='Email' />
        
            <TextInput style={styles.input} placeholder='Password' secureTextEntry />
        
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry />

                {/* <Text> Gender</Text> */}
              <RadioGroup radioButtons={radioButtonsData} onPress={radioButtonsData => setSelectedId(radioButtonsData)} style={styles.radioB}  />
            

        
            <TextInput style={styles.input} placeholder='Phone Number' />
            {/* <CheckBox 
                    disabled={false}
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}/> */}
            {Platform.OS === 'android' && (
    <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
    />
)}

            <Text>Agree to terms and conditions</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
        </View>
    )
}

export default RegisterUserScreen;