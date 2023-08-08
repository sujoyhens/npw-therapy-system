import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-paper';


const Item = ({ item, backgroundColor, onPress,textColor }) => (
  <TouchableOpacity icon="camera" mode="contained" onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Avatar.Icon size={40} icon={item.icon} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} color="black" />
    <Text style={[styles.title, { color: 'black' }]}>{item.title}</Text>
  </TouchableOpacity>
);

const FlatLists = ({ listData, onChildData }) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'gray' : 'darkgray';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        key={item.id}
        item={item}
        onPress={() => {setSelectedId(item.id),onChildData(item.id)}}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    borderRadius: 50,
    marginHorizontal: 16,
    elevation: 5
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 5
  },
});

export default FlatLists;