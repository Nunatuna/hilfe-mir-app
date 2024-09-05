import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';


// Main component of the calendar
const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // This gets the number of days in september and calculates it, it totals to 30 days
  const daysInMonth = new Date(2024, 9, 0).getDate(); // September 2024
  const weeksInMonth = Math.ceil((new Date(2024, 8, 1).getDay() + daysInMonth) / 7); // Calculate weeks in September 2024

  // This handles the fucntion so you can press each date
  const handleDatePress = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  // This makes the dates into TouchableOpacities
  const renderDate = ({ item }) => (
    <TouchableOpacity style={styles.dateContainer} onPress={() => handleDatePress(item)}>
      <Text style={styles.dateText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>September 2024</Text>
      {/* This flatlist puts the dates into a grid, so it looks like an actual calendar */}
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
      {/* The modal that opens up when you press a date and also says the name of the date in it */}
      <DateModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        date={selectedDate}
      />
    </View>
  );
};

// The part of the modal that handles the content of the date
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
