import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Import necessary icon libraries
import PictureOfTheDay from './CameraComponent';
import CalendarComponent from './CalendarComponent';

// Main component
const CreatePostModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to open modal */}
      <Text style={styles.header}>Picture of the day</Text>
      <Text style={styles.subHeader}>Show your besties what you are doing today!</Text>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Community</Text>
      </TouchableOpacity>

      {/* Modal component */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close-circle" size={40} color="#333" />
          </TouchableOpacity>

          {/* Modal content */}
          <View style={styles.modalContent}>
            {/* You can add more content here */}
            <CalendarComponent />
            <PictureOfTheDay />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  openButton: {
    width: '100%',
    backgroundColor: '#FFADE0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1A428A',
    marginBottom: 5,
  },
  subHeader: {
    color: '#8c9aad',
    marginBottom: 20,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    elevation: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  modalContent: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'flex-end',  // Change this line to align content to the top
    alignItems: 'center',
    width: '100%', // Ensures the content spans the full width
  },
  modalText: {
    fontSize: 18,
  },
});

export default CreatePostModal;
