import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])

    return (
        <View style={styles.main}>
            <Image
                style={styles.logo}
                source={require('../../images/playstore.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode: 'center'
    }
});

export default Splash