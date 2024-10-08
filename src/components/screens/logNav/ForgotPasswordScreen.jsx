import React, { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../../../styles';

const ForgotPasswordScreen = () => {
    const [showOtp, setShowOtp] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailSubmit = () => {
        setShowOtp(true);
    };

    const handleOtpSubmit = () => {
        setShowNewPassword(true);
    };

    const handlePasswordSubmit = () => {
        // Handle password submission logic here
    };

    return (
        
        <ScrollView style={styles.container} >
            <Text style={styles.title}>Forgot Password</Text>
            {!showOtp && (
                <View>
                    <TextInput
                        style={styles.input}
                
                        onChangeText={(text) => console.log(text)}
                        placeholder="Enter your email"
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttontext} onPress={handleEmailSubmit}>
                            Submit
                        </Text>
                    </TouchableHighlight>
                </View>
            )}

            {showOtp && !showNewPassword && (
                <View>
                    <Text>OTP</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setOtp(text)}
                        placeholder="Enter OTP"
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttontext} onPress={handleOtpSubmit}>
                            Submit
                        </Text>
                    </TouchableHighlight>
                </View>
            )}

            {showNewPassword && (
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNewPassword(text)}
                        placeholder="Enter new password"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder="Confirm new password"
                        secureTextEntry
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttontext} onPress={handlePasswordSubmit}>
                            Submit
                        </Text>
                    </TouchableHighlight>
                </View>
            )}
        </ScrollView>
    );
};

export default ForgotPasswordScreen;





// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native';

// const ForgotPasswordScreen = () => {
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [showOtp, setShowOtp] = useState(false);
//     const [showNewPassword, setShowNewPassword] = useState(false);

//     const handleEmailSubmit = async () => {
//         try {
//             const response = await fetch('/api/send-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });
//             const data = await response.json();
//             if (data.success) {
//                 setShowOtp(true); // Show OTP input field
//                 Alert.alert("OTP sent", "Check your email for the OTP.");
//             } else {
//                 Alert.alert("Error", data.message);
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//             Alert.alert("Error", "Failed to send OTP.");
//         }
//     };

//     const handleOtpSubmit = async () => {
//         try {
//             const response = await fetch('/api/verify-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, otp }),
//             });
//             const data = await response.json();
//             if (data.success) {
//                 setShowNewPassword(true); // Allow user to set new password
//                 Alert.alert("Success", "OTP verified.");
//             } else {
//                 Alert.alert("Error", data.message);
//             }
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//             Alert.alert("Error", "Failed to verify OTP.");
//         }
//     };

//     // Add the rest of your component code here...

//     return (
//         <View style={styles.container}>
//             {!showOtp && (
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={setEmail}
//                         placeholder="Enter your email"
//                     />
//                     <TouchableHighlight style={styles.button} onPress={handleEmailSubmit}>
//                         <Text style={styles.buttontext}>
//                             Submit
//                         </Text>
//                     </TouchableHighlight>
//                 </View>
//             )}

//             {showOtp && !showNewPassword && (
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={setOtp}
//                         placeholder="Enter OTP"
//                     />
//                     <TouchableHighlight style={styles.button} onPress={handleOtpSubmit}>
//                         <Text style={styles.buttontext}>
//                             Verify OTP
//                         </Text>
//                     </TouchableHighlight>
//                 </View>
//             )}

//             {/* Add new password input and submission logic here... */}

//         </View>
//     );
// };

// // Add your StyleSheet styles here...

// export default ForgotPasswordScreen;


// Function to generate a 6-digit random number
// function generateRandomNumber() {
//     return Math.floor(100000 + Math.random() * 900000);
//   }
  
//   // Function to start the process
//   function startProcess() {
//     const randomNumber = generateRandomNumber();
//     console.log("Generated Random Number: " + randomNumber);
  
//     // Prompt the user to input a number
//     const userInput = prompt("Enter the 6-digit number to match:");
  
//     // Check if the input matches the generated number
//     if (userInput == randomNumber) {
//       alert("Success! The numbers match.");
//     } else {
//       alert("Failure! The numbers do not match.");
//     }
//   }
  
//   // Function to repeat the process every 5 minutes
//   function startIntervalProcess() {
//     startProcess();
  
//     // Set an interval to run the process every 5 minutes (300000 milliseconds)
//     setInterval(startProcess, 300000);
//   }
  
//   // Start the process immediately
//   startIntervalProcess();
  // above code is otp based login systems