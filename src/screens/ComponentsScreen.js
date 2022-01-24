import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Giselle';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>    
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyles: {
    },
    textStyle: {
        fontSize: 40,
        padding: 20
    },
    subHeaderStyle: {
        fontSize: 20,
        paddingLeft: 20
    },
})

export default ComponentsScreen;