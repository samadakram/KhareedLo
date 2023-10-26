import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);

    const validate = () => {
        if (email === '') {
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }

        if (password === '') {
            setBadPassword(true);
        } else {
            setBadPassword(false)
        }
    };

    return (
        <ScreenWrapper>
            <Image
                style={styles.logo}
                source={require('../../images/playstore.png')}
            />
            <Text style={styles.loginText}>Login</Text>
            <CustomTextInput
                placeholder="Enter Email Id"
                icon={require('../../images/email.png')}
                value={email}
                onChnageText={text => setEmail(text)}
            />
            {
                badEmail === true && (
                    <Text style={styles.badText}>Please Enter Email Id</Text>
                )
            }
            <CustomTextInput
                placeholder="Enter Password"
                icon={require('../../images/lock.png')}
                value={password}
                onChnageText={text => setPassword(text)}
                type='password'
            />
            {
                badPassword === true && (
                    <Text style={styles.badText}>Please Enter Password</Text>
                )
            }
            <CustomButton
                title={'Login'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => {
                    validate()
                }}
            />
            <Text
                style={styles.createAccount}
                onPress={() => { navigation.navigate('SignUp') }}
            >Create New Account</Text>
        </ScreenWrapper>
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
        marginTop: 120,
        borderRadius: 50,
        //borderColor: 'orange',
        borderWidth: 1
    },
    loginText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 20
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20,
        alignSelf: 'center',
        width: '85%',
        height: 50,
        marginTop: 50,
        color: 'black'
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
    },
    badText: {
        marginTop: 10,
        paddingLeft: 30,
        color: 'red'
    }
});

export default Login