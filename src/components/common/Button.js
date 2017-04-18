import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress}style={buttonStyle}>
            <Text style={textStyle}>{children} </Text>   
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        //flex: 1,
        alignSelf: 'center',
        backgroundColor: '#000',
        height: 50
    }
};

export { Button };
