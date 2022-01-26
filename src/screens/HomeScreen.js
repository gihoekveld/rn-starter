import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text 
        style={styles.textStyle}>Hi there!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title="Go to Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "600",
    paddingBottom: 30,
    paddingTop: 50,
    textAlign: "center",
  }
});

export default HomeScreen;

