import React, { useState } from 'react'; // Add import statement for useState
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'; // Add import statement for Alert
import styles from './styles'; // Add import statement for styles
import AuthViewModel from 'path/to/AuthViewModel'; // Add import statement for AuthViewModel

const LogInScreen = ({ navigation }) => {
    const{login,error} = AuthViewModel();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const HandleLogin=()=>{
        login(email,password);
        if(error){
           Alert.alert('LoginError',error);
        }else{
            navigation.navigate('Home');
        }
    };
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>NeoSOFT</Text>
            <TextInput
             placeholder='email'
             style={styles.input}
                value={email}
                onChangeText={setEmail} />
            <TextInput
                placeholder='password'
                style={styles.input}
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={HandleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.link} onPress={()=>navigation.navigate('ForgotPassword')}>Forgot Password?</Text>  
            <Text style={styles.link} onPress={()=>navigation.navigate('RegisterUser')}>Don't have an account?</Text>     

            </View>     
                    </View>
    )
}

export default LogInScreen;