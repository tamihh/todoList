import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChange={onChangeText}
        style={styles.inputStyle}
        multiline={true}/>
    </View>
  );
};


const styles = {
  inputStyle: {
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 16,
    lineHeight: 45,
    flex: 1
  },
  labelStyle: {
    fontSize: 10,
    color: '#ccc',
    flex: 1,
  },
  containerStyle: {
    height: 50,
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}
export { Input };
