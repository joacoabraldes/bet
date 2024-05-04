import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ money, leagues, setSelectedLeague }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to control dropdown visibility
  
  const handleLeagueSelection = (league) => {
    setSelectedLeague(league);
    setIsDropdownVisible(false);
  };

  return (
    <View style={styles.navbar}>
      {leagues ? (
        <TouchableOpacity style={styles.iconButton} onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
          <Icon name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      ) : null}
      <View style={styles.spacer} />
      <Text style={styles.moneyCounter}>${money}</Text>
      {/* Dropdown Modal */}
      <Modal visible={isDropdownVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setIsDropdownVisible(false)} style={styles.closeButton}>
            <Icon name="times" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.dropdownContainer}>
            <FlatList
              data={leagues}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleLeagueSelection(item.code)}
                >
                  <Text style={styles.dropdownText}>{item.name.replace(/_/g, ' ')}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.code}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Adjusted to space between
    backgroundColor: '#31363F',
    paddingVertical: 10, // Apply padding only vertically
    paddingHorizontal: 20, // Apply padding only horizontally
  },
  spacer: {
    flex: 1, // Take up remaining space
  },
  iconButton: {
    // Remove marginTop and marginLeft
  },
  moneyCounter: {
    color: '#fff', // White color for text
    fontSize: 20,
    fontWeight: 'bold',
    // Remove position, top, and right
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40, // Adjusted padding for modal content
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  dropdownContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  dropdownText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Navbar;
