import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <View style={styles.containerButtonStyle}>
        <Button 
          title="Increase" 
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button 
          title="Decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </View>
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Current Count: {counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonStyle: {
    marginTop: 30,
    marginBottom: 20
  },
  containerStyle: {
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    borderWidth: 1,
    width: 300,
    marginTop: 20
  }
});

export default CounterScreen;