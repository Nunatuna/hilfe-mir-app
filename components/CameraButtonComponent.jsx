import React, { useEffect } from 'react';
import { View, Button, Alert, PermissionsAndroid, Platform } from 'react-native';
import { launchCamera } from 'react-native-image-picker';


//THIS IS NOT BEING USED!!!
// Main camera component, which also will also ask for permission to use the camera app
const CameraButtonComponent = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
  }, []);
  // This asks for permission V
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Fucntion to open the camera app using react-native-image-picker
  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    try {
      const result = await launchCamera(options);
      if (result.didCancel) {
        Alert.alert('User cancelled camera picker');
      } else if (result.errorCode) {
        Alert.alert('Camera Error', result.errorMessage);
      } else {
        console.log('Camera Response:', result);
        // Handle the response data
      }
    } catch (error) {
      Alert.alert('Camera Error', error.message);
    }
  };
};

export default CameraButtonComponent;
