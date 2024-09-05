import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// The Sofie version of this component
// Import the local image
import mapImage from '../img/map-placeholder.png'; // Adjust the path to your image

const FriendLocationTile = () => {
  return (
    <View style={styles.tileContainer}>
      <View style={styles.tileHeader}>
        <Image
          source={mapImage}
          style={styles.imageStyle}
          resizeMode="cover" // This ensures the image covers the area without distortion
        />
        <View style={styles.status}>
          <Text style={styles.update}>Last updated: 19:24</Text>
          <Text style={styles.name}>Sofie</Text>
          <View style={styles.circle}></View>
          <View>
            <Text style={styles.addressName}>Olivers Hule</Text>
            <Text style={styles.address}>Brovej 121, 6310 Broager</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.tileBottom}>
        <View style={styles.arrivalTime}>
          <Icon name="walking" size={20} color="#FF9D00" />
          <Text style={styles.arrivalText}>17 min</Text>
        </View>

        <View style={styles.arrivalTime}>
          <Text style={styles.arrivalText}>Find friend</Text>
          <Icon name="search" size={20} color="#FF9D00" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  tileHeader: {
    flexDirection: 'row', // Align children horizontally
    alignItems: 'flex-start', // Vertically center the children
    justifyContent: 'space-between', // Add space between the children
    width: '100%',
  },
  imageStyle: {
    width: '40%',  // Adjust width based on your layout
    height: '100%',   // Set the height you desire for the image
    borderRadius: 10, // Rounded corners for the image
  },
  update: {
    padding: 8,
    backgroundColor: '#B1D9FF',
    borderRadius: 20,
    flexShrink: 1, // Allow the text to shrink if needed
    alignSelf: 'flex-end',
  },
  circle: {
    padding: 10,
    backgroundColor: '#2DBF56',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    color: '#1A428A',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  status:{
    alignItems: 'center',
    gap: 10,
  },
  addressName: {
    color: '#001750',
    fontSize: 15,
    fontWeight: 'bold',
  },
  divider: {
    padding: 2,
    width: '100%',
    backgroundColor: '#FFADE0',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  arrivalTime: {
    flexDirection: 'row',
    color: '#FF9D00',
    alignItems: 'center'
  },
  arrivalText: {
    color: '#FF9D00',
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  tileBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FriendLocationTile;
