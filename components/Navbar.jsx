import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ money }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="bars" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Text style={styles.moneyCounter}>${money}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Adjusted to space between
    backgroundColor: '#121212',
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
});

export default Navbar;
