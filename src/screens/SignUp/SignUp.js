import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <Image
                style={styles.logo}
                source={require('../../images/playstore.png')}
            />
            <Text style={styles.loginText}>Create New Account</Text>
            <CustomTextInput
                placeholder="Enter Name"
                icon={require('../../images/user.png')}
            />
            <CustomTextInput
                placeholder="Enter Email Id"
                icon={require('../../images/email.png')}
            />
            <CustomTextInput
                placeholder="Enter Mobile"
                icon={require('../../images/phone.png')}
            />
            <CustomTextInput
                placeholder="Enter Password"
                icon={require('../../images/lock.png')}
                type='password'
            />
            <CustomButton
                title={'Login'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => { }}
            />
            <Text
                style={styles.createAccount}
                onPress={() => { navigation.goBack() }}
            >Already have account?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        color: 'black'
        //backgroundColor: '#000'
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 50,
        //borderColor: 'orange',
        borderWidth: 1
    },
    loginText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 50
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20,
        alignSelf: 'center',
        width: '85%',
        height: 50,
        marginTop: 50,
        color: 'orange'
    },
    password: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20,
        alignSelf: 'center',
        width: '85%',
        height: 50,
        marginTop: 20,
        color: 'orange'
    },
    createAccount: {
        fontSize: 18,
        color: '#000',
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: 20,
        textDecorationLine: 'underline'
    }
});

export default SignUp