import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    button: {
        width: '80%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
    },
    link: {
        marginTop: 10,
        color: 'blue',  
    },
    radioB:{
        flexDirection: 'row',


    },
    checkbox:{
        alignSelf:'flex-start',
        margin: 10,
        borderColor:'black',
    },
});


export default styles;