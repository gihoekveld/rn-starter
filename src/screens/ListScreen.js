import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colorGenerator } from '../helpers/colorGenerator';

const ListScreen = () => {
  const data = [
    {id:  1, name: 'Bev',      color: 'rgb(135,49,200)' },
    {id:  2, name: 'Bianca',   color: 'rgb(135,49,200)' },
    {id:  3, name: 'Cris',     color: 'rgb(135,49,200)' },
    {id:  4, name: 'Caique',   color: 'rgb(135,49,200)' },
    {id:  5, name: 'Carol',    color: 'rgb(135,49,200)' },
    {id:  6, name: 'Dani',     color: 'rgb(135,49,200)' },
    {id:  7, name: 'Diego',    color: 'rgb(135,49,200)' },
    {id:  8, name: 'Fabi Ge',  color: 'rgb(135,49,200)' },
    {id:  9, name: 'Fabiana',  color: 'rgb(135,49,200)' },
    {id: 10, name: 'Fernanda', color: 'rgb(135,49,200)' },
    {id: 11, name: 'Gu',       color: 'rgb(135,49,200)' },
    {id: 12, name: 'Helo',     color: 'rgb(135,49,200)' },
    {id: 13, name: 'Hugo',     color: 'rgb(135,49,200)' },
    {id: 14, name: 'Marilia',  color: 'rgb(135,49,200)' },
    {id: 15, name: 'Rafa',     color: 'rgb(135,49,200)' },
    {id: 16, name: 'Sandro',   color: 'rgb(135,49,200)' },
    {id: 17, name: 'Thais',    color: 'rgb(135,49,200)' },
    {id: 18, name: 'Vini 1',   color: 'rgb(135,49,200)' },
    {id: 19, name: 'Vini 2',   color: 'rgb(135,49,200)' },
    {id: 20, name: 'Vivi',     color: 'rgb(135,49,200)' },
    {id: 21, name: 'Wil',      color: 'rgb(135,49,200)' },
  ];
  const [list, setList] = useState(data);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity 
        style={{...styles.containerStyle, backgroundColor: item.color}}
        onPress={() => {
          setList(list.map((list) =>
            list.id === item.id
              ? { ...list, color: colorGenerator() }
              : { ...list }
          ));
        }}>
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
    
  return (
    <>
    <Text style={styles.titleStyle}>Friend's List</Text>
      <FlatList 
        data={list}  
        renderItem={renderItem} 
        keyExtractor={item => item.id}
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
    width: 200
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