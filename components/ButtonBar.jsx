import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Import necessary icon libraries

const ButtonBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="call" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="add-box" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="comment-dots" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="settings-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff', // Light background color
    padding: 15,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFCCE5', // Light pink background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonBar;
