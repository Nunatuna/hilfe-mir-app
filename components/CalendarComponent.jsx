import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const daysInMonth = new Date(2024, 9, 0).getDate(); // September 2024
  const weeksInMonth = Math.ceil((new Date(2024, 8, 1).getDay() + daysInMonth) / 7); // Calculate weeks in September 2024

  const handleDatePress = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const renderDate = ({ item }) => (
    <TouchableOpacity style={styles.dateContainer} onPress={() => handleDatePress(item)}>
      <Text style={styles.dateText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>September 2024</Text>
      <FlatList
        data={Array.from({ length: daysInMonth }, (_, i) => i + 1)}
        renderItem={renderDate}
        keyExtractor={(item) => item.toString()}
        numColumns={7}
        contentContainerStyle={[
          styles.calendar,
          { height: weeksInMonth * 50 }, // Adjust height based on number of weeks
        ]}
        style={styles.calendarList}
      />
      <DateModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        date={selectedDate}
      />
    </View>
  );
};

const DateModal = ({ isVisible, onClose, date }) => (
  <Modal
    visible={isVisible}
    transparent={true}
    animationType="fade"
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Content for {date} September</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Adjusted padding to fit the content
    backgroundColor: '#FFADE0',
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1A428A',
  },
  calendarList: {
    flexGrow: 0, // Prevents FlatList from growing out of bounds
  },
  calendar: {
    justifyContent: 'center',
  },
  dateContainer: {
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A428A',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CalendarComponent;
