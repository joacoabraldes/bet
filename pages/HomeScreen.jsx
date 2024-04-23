import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';

const apiKey = 'e7d473ed3817a166d0a8dbd0760a0948';
const apiUrl = 'https://api.the-odds-api.com/v4/sports/soccer_epl/events';

const HomeScreen = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    axios.get(apiUrl, {
      params: {
        apiKey: apiKey
      }
    })
    .then(response => {
      // Handle successful response
      setUpcomingEvents(response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
    });
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <View style={styles.container}>
      <Navbar money="2000" />
      <ScrollView style={styles.content}>

        <View>
          <Text style={styles.sectionHeading}>Live Matches</Text>
        </View>
        <View>
          <Text style={styles.sectionHeading}>Upcoming Matches</Text>
          <FlatList
            data={upcomingEvents}
            renderItem={({ item }) => <HomeCard event={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#4b4847',
    // #131C61 
    width: '100%',
  },
  content: {
    flex: 1,
    // Your main content styles
  },
});

export default HomeScreen;