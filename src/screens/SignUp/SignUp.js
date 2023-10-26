import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';

const SignUp = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [password, setPassword] = useState('');
    const [badPassword, setBadPassword] = useState(false);

    const validate = () => {
        if (name === '') {
            setBadName(true)
        } else {
            setName(false)
        }

        if (email === '') {
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }

        if (mobile === '') {
            setBadMobile(true);
        } else if (mobile > 11) {
            setBadMobile(true)
        } else {
            setBadMobile(false);
        }

        if (password === '') {
            setBadPassword(true);
        } else {
            setBadPassword(false)
        }
    };

    return (
        <ScreenWrapper>
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                <Image
                    style={styles.logo}
                    source={require('../../images/playstore.png')}
                />
                <Text style={styles.loginText}>Create New Account</Text>
                <CustomTextInput
                    value={name}
                    onChnageText={text => setName(text)}
                    placeholder="Enter Name"
                    icon={require('../../images/user.png')}
                />
                {
                    badName === true && (
                        <Text style={styles.badText}>Please Enter Name</Text>
                    )
                }
                <CustomTextInput
                    value={email}
                    onChnageText={text => setEmail(text)}
                    placeholder="Enter Email Id"
                    icon={require('../../images/email.png')}
                />
                {
                    badEmail === true && (
                        <Text style={styles.badText}>Please Enter Email Id</Text>
                    )
                }
                <CustomTextInput
                    value={mobile}
                    onChnageText={text => setMobile(text)}
                    placeholder="Enter Mobile"
                    icon={require('../../images/phone.png')}
                    keyboardType="numeric"
                />
                {
                    badMobile === true && (
                        <Text style={styles.badText}>Please Enter Mobile</Text>
                    )
                }
                <CustomTextInput
                    value={password}
                    onChnageText={text => setPassword(text)}
                    placeholder="Enter Password"
                    icon={require('../../images/lock.png')}
                    type='password'
                />
                {
                    badPassword === true && (
                        <Text style={styles.badText}>Please Enter Password</Text>
                    )
                }
                <CustomButton
                    title={'Sign Up'}
                    bgColor={'#000'}
                    textColor={'#fff'}
                    onPress={() => {
                        validate();
                    }}
                />
                <Text
                    style={styles.createAccount}
                    onPress={() => { navigation.goBack() }}
                >Already have account?</Text>
            </KeyboardAvoidingView>
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
        marginTop: 20
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20,
        alignSelf: 'center',
        width: '85%',
        height: 50,
        //marginTop: 50,
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
    },
    badText: {
        marginTop: 5,
        paddingLeft: 30,
        color: 'red'
    }
});

export default SignUp