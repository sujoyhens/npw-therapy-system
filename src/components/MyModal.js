import React, { useState } from 'react';
import {  Modal, StyleSheet, Text,  View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MyModal = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(modalVisible);
        }}>
        <View style={styles.modalView}>
        <Feather name={props.iconname} size={44} color="black" />
          <Text style={styles.modalText}>{props.msg}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin:30,
    marginTop:200,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    minHeight:150,
    verticalAlign:'middle',
    padding: 35,
    alignItems: 'center',
    borderBottomColor:'black',
    borderBottomWidth:2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textTransform:'none',
    fontSize:16,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyModal;