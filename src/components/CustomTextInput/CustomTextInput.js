import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

const CustomTextInput = ({ value, onChnageText, placeholder, icon, type }) => {
    return (
        <View style={styles.main}>
            <Image
                source={icon}
                style={styles.icon}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#8e8e8e'
                style={{ marginLeft: 10, color: 'orange' }}
                secureTextEntry={type ? true : false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        width: 24,
        height: 24,

    }
});

export default CustomTextInput