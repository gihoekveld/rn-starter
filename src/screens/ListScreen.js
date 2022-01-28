import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colorGenerator } from '../helpers/colorGenerator';

const Item = ({item, onPress, backgroundColor}) => {
    return (
        <TouchableOpacity 
            style={[styles.containerStyle, backgroundColor]}
            onPress={onPress}>
            <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        </TouchableOpacity>
    );
};

const ListScreen = () => {
    const [color, setColor] = useState('rgb(135,49,200)'); 
    const [selectedId, setSelectedId] = useState(null);
    const friends = [
        {id: 1, name: 'Fabiana',  age: 35, color: color },
        {id: 2, name: 'Sandro',   age: 21, color: color },
        {id: 3, name: 'Cristina', age: 21, color: color },
        {id: 4, name: 'Carol',    age: 24, color: color },
        {id: 5, name: 'Wil',      age: 21, color: color },
        {id: 6, name: 'Caique',   age: 21, color: color },
        {id: 7, name: 'Bev',      age: 25, color: color },
        {id: 8, name: 'Dani',     age: 39, color: color },
        {id: 9, name: 'Ana',      age: 70, color: color }
    ];

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colorGenerator() : item.color;

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
            />
        );
    };
    
    return (
        <>
        <Text style={styles.titleStyle}>Friend's List</Text>
            <FlatList 
                data={friends}  
                renderItem={renderItem} 
                keyExtractor={friend => friend.id}
                extraData={selectedId}
            />
        </>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: 'center',
        fontSize: 20, 
        fontWeight: '600',
        paddingTop: 30,
        paddingBottom: 20
    },
    containerStyle: {
        alignSelf: 'center', 
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 5,
        width: 200,
    },
    textStyle: {
        color: '#FFF',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        width: '100%'
    }
});

export default ListScreen;