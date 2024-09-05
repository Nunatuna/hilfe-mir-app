import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PictureOfTheDay = () => {
  const [photoUri, setPhotoUri] = useState(null);

  const openCamera = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.uri);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Picture of the Day Box */}
      <View style={styles.container}>
        <Text style={styles.title}>Picture of the day</Text>
        <Text style={styles.subtitle}>Show your besties what you are doing today</Text>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Add a post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e3b4e',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8c9aad',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFADE0',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PictureOfTheDay;
