import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigateToScreen('Home')}>
          <Icon name="soccer-ball-o" size={24} color="#fff" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigateToScreen('Bets')}>
          <Icon name="money" size={24} color="#fff" />
          <Text style={styles.footerText}>Bets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigateToScreen('Team')}>
          <Icon name="bell" size={24} color="#fff" />
          <Text style={styles.footerText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigateToScreen('Score')}>
          <Icon name="trophy" size={24} color="#fff" />
          <Text style={styles.footerText}>Score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigateToScreen('Profile')}>
          <Icon name="user" size={24} color="#fff" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', // Adjust as needed
  },
  content: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#31363F', // Dark color for footer
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
