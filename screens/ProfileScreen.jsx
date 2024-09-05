import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileHeader';
import ButtonBar from '../components/ButtonBar';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import ProfileDrawerComponent from '../components/ProfileDrawer';

const ProfileScreen = () => {
  return (
    // The gradient thats in the background
    <LinearGradient
      colors={['#D5E8FF', '#D9D5FF', '#B7BFFF']} // Adjusted gradient colors based on the provided image
      style={styles.gradientContainer}
    >
      {/* This makes the screen scrollable */}
      <ScrollView 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false} // Hide the scrollbar
      >
        {/* The profile card, buttonbar and drawer components, stacked on top of each other */}
        <ProfileCard />
        <ButtonBar />
        <ProfileDrawerComponent/>
          <LinearGradient
            colors={['#D5E8FF', '#D9D5FF', '#B7BFFF']} // Adjusted gradient colors based on the provided image
            style={styles.container}/>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // Ensure the LinearGradient covers the entire screen
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
    paddingTop: 60,
    flexGrow: 1, // Ensure the ScrollView takes up the full height
  }
});

export default ProfileScreen;
