import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native'

const ScreenWrapper = ({ children }) => {

    const [dimensions, setDimensions] = useState(Dimensions.get('window'));

    //const viewPaddingTop = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight + (dimensions.width > 500 ? 30 : 10);
    const viewPadding = dimensions.width > 500 ? 30 : 10;

    useEffect(() => {
        const onChange = (result) => {
            setDimensions(result.window);
        };

        const subscription = Dimensions.addEventListener('change', onChange);

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={[styles.viewContainer, { padding: viewPadding }]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContainer: {
        flex: 1,
    }
});

export default ScreenWrapper