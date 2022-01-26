import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.label}>Enter Password:</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCirrect={false}
        value={password}
        onChangeText={(newValue, oldValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text style={styles.messageError}>Password must be 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    borderColor: 'rgb(100, 100, 100)',
    borderRadius: 5,
    borderWidth: 1, 
    fontSize: 16,
    margin: 15,
    padding: 5,
    width: '90%'
  },
  label: {
    fontSize: 16,
    marginLeft: '5%',
    paddingTop: 30
  },
  messageError: {
    color: 'red',
    marginLeft: '5%',
  }
});

export default TextScreen;