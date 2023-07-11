import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, title, bgColor, textColor }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: '85%',
                height: 50,
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 40
            }}
            onPress={() => { onPress() }}
        >
            <Text
                style={{
                    color: textColor
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton