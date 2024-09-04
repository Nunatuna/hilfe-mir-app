import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';
import GPSandMapComponent from '../components/GPSandMapComponent';
import CircleButtonWithModal from '../components/MapModalComponent';

const HomeScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [addresses, setAddresses] = useState(['Home', 'Asbjørns Crib', 'Olivers hule']);
  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
    setNewAddress('');
  };

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress.trim()]);
      closeModal();
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <CircleButtonWithModal></CircleButtonWithModal>
        <GPSandMapComponent style={styles.map} />

        <View style={styles.buttonContainer}>
          {/* Main Button with Dropdown Menu */}
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity
                onPress={openMenu}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Where are you heading?</Text>
              </TouchableOpacity>
            }
            style={styles.menu}
          >
            {addresses.map((address, index) => (
              <Menu.Item
                key={index}
                onPress={() => {}}
                title={address}
                titleStyle={styles.menuItemText}
                style={styles.menuItem}
              />
            ))}
            <Divider />
            <Menu.Item
              onPress={openModal}
              title="Tilføj ny Addresse"
              titleStyle={styles.addAddressText}
              style={styles.addAddressItem}
            />
          </Menu>
        </View>

        {/* Modal for Adding New Address */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter new address"
                value={newAddress}
                onChangeText={setNewAddress}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButtonAdd} onPress={handleAddAddress}>
                  <Text style={styles.modalButtonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonCancel} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    // Ensure map takes up the whole screen
  },
  buttonContainer: {
    position: 'absolute',
    top: 60, // Adjust the top position if needed
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 45,
    alignItems: 'center',
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 20,
  },
  buttonText: {
    fontSize: 16,
  },
  menu: {
    marginTop: 100,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4, // Add slight elevation to menu
    padding: 10,
    left: '25%',
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#333',
    fontSize: 16,
  },
  addAddressItem: {
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FFADE0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Separate from other menu items
  },
  addAddressText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalButtonAdd: {
    backgroundColor: '#FFADE0',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
