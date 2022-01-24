import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score}) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={imageSource} />
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.subHeaderStyle}>Image score - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginBottom: 20,
  },
  textStyle: {
    marginBottom: 2,
    marginTop: 5,
    textAlign: "center",
  },
  subHeaderStyle: {
    marginBottom: 5,
    textAlign: "center",
  }
});

export default ImageDetail;