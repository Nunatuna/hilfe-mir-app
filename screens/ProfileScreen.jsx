import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileHeader';
import ButtonBar from '../components/ButtonBar';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#D5E8FF', '#D9D5FF', '#B7BFFF']} // Adjusted gradient colors based on the provided image
      style={styles.gradientContainer}
    >
      <ScrollView 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false} // Hide the scrollbar
      >
        <ProfileCard />
        <ButtonBar />
        <View style={styles.drawer}>
          <LinearGradient
            colors={['#D5E8FF', '#D9D5FF', '#B7BFFF']} // Adjusted gradient colors based on the provided image
            style={styles.container}/>
        </View>
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
    gap: 20,
    paddingTop: 60,
    flexGrow: 1, // Ensure the ScrollView takes up the full height
  },
  drawer: {
    padding: 60,
  },
});

export default ProfileScreen;
