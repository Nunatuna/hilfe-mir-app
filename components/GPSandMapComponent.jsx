// components/GPSandMapComponent.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

// Main GPS/Map component
export default function GPSandMapComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Fetches the current location of the phone which also asks for permission to use the GPS
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get the coordinates, with a "high accuracy"
      let { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(coords);
    })();
  }, []);

  // The map which takes the coordinates and finds the location on a map
  return (
    <View style={styles.mapContainer}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <View style={styles.mapWrapper}>
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {/* The marker on the map so you can see where you are located */}
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={'Your Location'}
              description={'This is where you are currently located'}
            />
          </MapView>
          <LinearGradient
            colors={['rgba(255,157,0,0.5)', 'rgba(255,0,0,0.5)', 'rgba(0,0,255,0.5)']} // Red to blue gradient
            style={styles.gradient}
            pointerEvents="none" // Allow interactions to pass through the gradient
          />
        </View>
      ) : (
        // Loading text while the app fecthes the coordinates
        <Text>Fetching location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapWrapper: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
    pointerEvents: 'none',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});
