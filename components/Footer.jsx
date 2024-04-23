import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Icon name="soccer-ball-o" size={24} color="#fff" />
        <Text style={styles.footerText}>Home</Text>
      </View>
      <View style={styles.footerItem}>
        <Icon name="money" size={24} color="#fff" />
        <Text style={styles.footerText}>Bets</Text>
      </View>
      <View style={styles.footerItem}>
        <Icon name="bell" size={24} color="#fff" />
        <Text style={styles.footerText}>Team</Text>
      </View>
      <View style={styles.footerItem}>
        <Icon name="trophy" size={24} color="#fff" />
        <Text style={styles.footerText}>Score</Text>
      </View>
      <View style={styles.footerItem}>
        <Icon name="user" size={24} color="#fff" />
        <Text style={styles.footerText}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#121212', // Dark color for footer
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff', // White color for text
  },
});

export default Footer;