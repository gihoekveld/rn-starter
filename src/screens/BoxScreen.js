import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3, 
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    backgroundColor: 'rgb(240, 188, 184)',
    borderWidth: 3,
    borderColor: 'pink',
    height: 100,
    width: 100,
  },
  textTwoStyle: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(70, 224, 168)',
    borderWidth: 3,
    borderColor: 'green',
    fontSize: 18,
    height: 100,
    width: 100,
  },
  textThreeStyle: {
    backgroundColor: 'rgb(198, 145, 235)',
    borderWidth: 3,
    borderColor: 'purple',
    height: 100,
    width: 100,
  }
});

export default BoxScreen;