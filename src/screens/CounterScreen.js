import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number } => { count: number
  // action ==== { type: 'increment' || 'decrement', payload: 1 }

  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <View style={styles.containerButtonStyle}>
        <Button 
          title="Increase" 
          onPress={() => {
            dispatch({ type: 'increment', payload: 1 })
          }}
        />
        <Button 
          title="Decrease"
          onPress={() => {
            dispatch({ type: 'decrement', payload: 1 })
          }}
        />
      </View>
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Current Count: {state.count}</Text>
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