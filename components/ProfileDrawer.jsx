import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FriendLocationTile from './FriendLocationComponent';
import PictureOfTheDay from './CameraComponent';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Import necessary icon libraries


const ProfileDrawerComponent = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [comment, setComment] = useState('');

  const emotions = ['Happy', 'Normal', 'Nervous',  'Scared', 'Drunk', 'Angry'];

  // Color mapping for each emotion
  const emotionColors = {
    Happy: '#2DBFBF', // Ocean Green
    Normal: '#2DBF56', // Green
    Nervous: '#D7DB00', // Light Green
    Scared: '#FBB605', // Light Orange
    Drunk: '#FF8A00', // Orange
    Angry: '#ED3A3A', // Red
  };

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Profile' && styles.activeTab]}
          onPress={() => setActiveTab('Profile')}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Friends' && styles.activeTab]}
          onPress={() => setActiveTab('Friends')}
        >
          <Text style={styles.tabText}>Friends</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Tab Content */}
      {activeTab === 'Profile' && (
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>How are you doing today Ronja?</Text>
          
          {/* Emotions Container */}
          <View style={styles.emotionsBar}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {emotions.map((emotion, index) => (
                <View key={index} style={styles.emotionWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.emotionButton,
                      { backgroundColor: emotionColors[emotion] }, // Apply color dynamically
                      selectedEmotion === emotion && styles.selectedEmotion,
                    ]}
                    onPress={() => setSelectedEmotion(emotion)}
                  />
                  <Text style={styles.emotionText}>{emotion}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Comment Input */}
          <View style={styles.commentContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add comment ..."
              value={comment}
              onChangeText={setComment}
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
          {/* Picture of the Day */}
          <PictureOfTheDay/>
        </View>
      )}

      {/* Friends Tab Content */}
      {activeTab === 'Friends' && (
        <View style={styles.contentContainer}>
          <FriendLocationTile/>
          <FriendLocationTile/>
          <FriendLocationTile/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1D9FF',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    elevation: 5,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: '15%',
    borderRadius: 40,
    backgroundColor: '#F5F5F7',
  },
  activeTab: {
    backgroundColor: '#FFADE0',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    borderRadius: 15,
    padding: 0,
    gap: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: -15,
    color: '#fff',
  },
  emotionsBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,  // Add horizontal padding
    marginBottom: 15,
  },
  emotionWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,  // Spacing between buttons
  },
  emotionButton: {
    width: 45,  // Set width for circle
    height: 45, // Set height for circle
    borderRadius: 25,  // Make the button circular
    marginBottom: 5,  // Space between button and text
  },
  selectedEmotion: {
    borderColor: '#000',
    borderWidth: 2,
  },
  emotionText: {
    fontSize: 10,
    color: '#555B7B',
    textAlign: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  commentInput: {
    flex: 1,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#FFD7F2',
    padding: 10,
    borderRadius: 40,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#7A3F8C',
  },
});

export default ProfileDrawerComponent;
