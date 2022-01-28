import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { colorGenerator } from '../helpers/colorGenerator';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={{ alignSelf: 'center' }}>
      <View style={styles.containerButtonStyle}>
        <Button 
          title="Add a Color" 
          onPress={()=>{
            setColors([...colors, colorGenerator()]);
        }} />
      </View>
      <FlatList style={styles.containerListStyle}
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item, marginBottom: 5 }} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonStyle: {
    paddingBottom: 20,
    paddingTop: 30
  },
  containerListStylen: {
    alignSelf: "center",
  }
});

export default ColorScreen;