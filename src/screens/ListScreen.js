import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Fabiana', age: 35 },
        { name: 'Sandro', age: 21 },
        { name: 'Cristina', age: 21 },
        { name: 'Carol', age: 24 },
        { name: 'Wil', age: 21 },
        { name: 'Caique', age: 21 },
        { name: 'Bev', age: 25 },
        { name: 'Dani', age: 39 },
        { name: 'Ana', age: 70 },
    ];

    return ( 
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends}  
            renderItem={({ item }) => {
                return (
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                    </View>
                );
            }} 
        />
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        alignSelf: 'center', 
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 200,
    },
    textStyle: {
        backgroundColor: '#a435f0', 
        color: '#FFF',
        justifyContent: 'center',
        marginVertical: 5,
        padding: 20,
        textAlign: 'center',
        width: '100%'
    }
});

export default ListScreen;