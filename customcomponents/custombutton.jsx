// CustomButton.js
import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';

const CustomButton = ({ onPress, imageSource, buttonText }) => {
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Image style={styles.buttonImage} source={imageSource} />
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingRight: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        padding: 5,
    },
    buttonImage: {
        alignSelf: 'center',
        padding: 10,
        height: 18,
        width: 18,
        paddingRight: 15,
        marginTop: -3.8,
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
    },
});

export default CustomButton;



// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import CustomButton from './customcomponents/custombutton';
// const Icon = () => {
//     return (
//         <View style={styles.container}>
//             <CustomButton
//                 onPress={() => console.log('Home button pressed')}
//                 imageSource={require('./src/assets/homeicon.png')}
//                 buttonText="Home"
//             />

//             <CustomButton
//                 onPress={() => console.log('Office button pressed')}
//                 imageSource={require('./src/assets/office.png')}
//                 buttonText="Office"
//             />

//             <CustomButton
//                 onPress={() => console.log('Other button pressed')}
//                 imageSource={require('./src/assets/location.png')}
//                 buttonText="Other"
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'right',
//         marginLeft: 10,
//     },
// });

// export default Icon;    .. //this is how u use the custom button in the icon.js file
