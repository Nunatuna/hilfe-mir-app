import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Arrow and close icons from Ionicons

const CircleButtonWithModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Circle Button */}
      <TouchableOpacity style={styles.circleButton} onPress={toggleModal}>
        <Ionicons name="arrow-up" size={24} color="#FFADE0" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            {/* Scrollable bubbles */}
            <ScrollView
              horizontal
              contentContainerStyle={styles.scrollViewContent}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.friendBubbleContainer}>
                <View style={styles.friendBubble}>
                  <View style={styles.me}>
                    <View style={styles.friendStatusGreen}></View>
                    <Text style={styles.friendText}>R</Text>
                  </View>
                  <Text style={styles.friendLabel}>Heading Home</Text>
                </View>
                <View style={styles.friendBubble}>
                  <View style={styles.friend}>
                    <View style={styles.friendStatusGreen}></View>
                    <Text style={styles.friendText}>I</Text>
                  </View>
                  <Text style={styles.friendLabel}>Out</Text>
                </View>
                <View style={styles.friendBubble}>
                  <View style={styles.friend}>
                    <View style={styles.friendStatusYellow}></View>
                    <Text style={styles.friendText}>S</Text>
                  </View>
                  <Text style={styles.friendLabel}>Heading Home</Text>
                </View>
                <View style={styles.friendBubble}>
                  <View style={styles.friend}>
                    <View style={styles.friendStatusRed}></View>
                    <Text style={styles.friendText}>A</Text>
                  </View>
                  <Text style={styles.friendLabel}>Home</Text>
                </View>
                <View style={styles.friendBubble}>
                  <View style={styles.friend}>
                    <View style={styles.friendStatusRed}></View>
                    <Text style={styles.friendText}>P</Text>
                  </View>
                  <Text style={styles.friendLabel}>Out</Text>
                </View>
              </View>
            </ScrollView>

            {/* Fixed content below bubbles */}
            <View style={styles.activityBar}>
              <Text style={styles.activeName}>Ronja</Text>
              <Text style={styles.activeStatus}>
                Heading home <Text style={styles.activeTime}>- last active 20:38</Text>
              </Text>
            </View>
            <View style={styles.alertBtnContainer}>
              <TouchableOpacity style={[styles.alertBtn, styles.alertBtnMargin]}><Text style={styles.alertText}>Alert</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.alertBtn, styles.alertBtnMargin]}><Text style={styles.alertText}>Check Up</Text></TouchableOpacity>
              <TouchableOpacity style={styles.alertBtn}><Text style={styles.alertText}>Poke</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  circleButton: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 1000, // Ensures it hovers above other components
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%', // Limiting the height of the modal content
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  scrollViewContent: {
    flexDirection: 'row',
    marginBottom: 20, // Space between bubbles and the fixed content
  },
  friendBubbleContainer: {
    flexDirection: 'row',
  },
  friendBubble: {
    alignItems: 'center', // Centers content horizontally
    marginRight: 15, // Optional: Adds spacing between bubbles
  },
  me: {
    backgroundColor: '#FFADE0',
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows positioning of children
  },
  friend: {
    backgroundColor: '#FFD4EE',
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows positioning of children
  },
  friendText: {
    color: '#fff',
    fontSize: 32,
  },
  friendLabel: {
    color: '#000', // You can adjust the color as needed
    fontSize: 12,
    marginTop: 5, // Space between the bubble and the label
  },
  friendStatusGreen: {
    backgroundColor: '#86E50C',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff', // Optional: adds a border to make it stand out
  },
  friendStatusYellow: {
    backgroundColor: '#FFC700',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff', // Optional: adds a border to make it stand out
  },
  friendStatusRed: {
    backgroundColor: '#FF4A4A',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff', // Optional: adds a border to make it stand out
  },
  activityBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  activeName: {
    color: '#1A428A',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  activeStatus: {
    color: '#1A428A',
    fontSize: 15,
  },
  activeTime: {
    color: '#87A9E7',
  },
  alertBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  alertBtn: {
    flex: 1,
    backgroundColor: '#FFADE0',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingVertical: 20,
    borderRadius: 10,
  },
  alertBtnMargin: {
    marginRight: 10,
  },
  alertText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CircleButtonWithModal;
