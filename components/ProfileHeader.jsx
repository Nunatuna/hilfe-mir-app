import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for the location icon

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <View style={styles.profilePicWrapper}>
          <View style={styles.onlineIndicator} />
          <Text style={styles.profileInitial}>R</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>Ronja Clausen</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={14} color="#757575" />
            <Text style={styles.locationText}>Home</Text>
            <Text style={styles.updateTimeText}>Last updated 9:25:16</Text>
          </View>
        </View>
      </View>

      {/* Tell Friends Button */}
      <TouchableOpacity style={styles.tellFriendsButton}>
        <Text style={styles.buttonText}>Tell friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Light background color
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 300,
    elevation: 5,
    width: '80%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFCCE5', // Light pink background for the profile pic
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileInitial: {
    fontSize: 28,
    color: '#FFF',
  },
  onlineIndicator: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#4CAF50', // Green online indicator
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#FFF', // White border around the indicator
  },
  infoContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFADE0', // Light pink text color
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    marginLeft: 5,
    color: '#757575', // Gray color for location
    fontSize: 14,
  },
  updateTimeText: {
    marginLeft: 10,
    color: '#B3B3B3', // Lighter gray for the update time
    fontSize: 12,
  },
  tellFriendsButton: {
    backgroundColor: '#FFCCE5', // Light pink background for the button
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ProfileCard;
