import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  
  return (
    <View style={{ marginBottom: 5, marginTop: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: '16', fontWeight: '600' }}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ColorCounter;