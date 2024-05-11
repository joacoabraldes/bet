import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import BetView from "../components/BetView";
import { fetchEvents } from "../services/api";

/*KEYS:
3cd4cde4cb2c3121e3400910ddda3d9b
*/
const apiKey = "aca6bcc83b4086354791912e79b960fb";

const leagues = [
  { name: "Premier League", code: 1980 },
  { name: "La Liga", code: 2196 },
  { name: "Bundesliga", code: 1842 },
  { name: "Serie A", code: 2436 },
  { name: "Ligue 1", code: 2036 },
  { name: "Primera Division Argentina", code: 210697 },
];

const HomeScreen = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(1980);
  const [isLoading, setIsLoading] = useState(true);
  const [showBetView, setShowBetView] = useState(false);
  const [betList, setBetList] = useState([]);

  const clearBetList = () => {
    setBetList([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await fetchEvents(selectedLeague);
        setUpcomingEvents(eventsData.events);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedLeague]);

  useEffect(() => {
    if (betList.length > 0) {
      setShowBetView(true);
    } else {
      setShowBetView(false);
    }
  }, [betList]);

  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <Navbar
          money="2000"
          leagues={leagues}
          setSelectedLeague={setSelectedLeague}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.sectionHeading}>
            {leagues.find((league) => league.code === selectedLeague)?.name}
          </Text>
          {!isLoading ? (
            upcomingEvents.length > 0 ? (
              <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={upcomingEvents}
                renderItem={({ item }) => {
                  // Check if money_line is null
                  if (item.periods.num_0.money_line === null) {
                    return null; // Skip rendering the card
                  }
                  return (
                    <HomeCard
                      event={item}
                      league={selectedLeague}
                      betList={betList}
                      setBetList={setBetList}
                    />
                  );
                }}
                keyExtractor={(item) => item.event_id}
              />
            ) : (
              <Text style={styles.sectionHeading}>
                Oh no, there are no matches in the selected league.
              </Text>
            )
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </View>
      {showBetView && <BetView betList={betList} clearBetList={clearBetList} />}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#222831",
    width: "100%",
  },
  content: {
    flex: 1,
  },
  customHeader: {
    paddingTop: 40,
  },
});

export default HomeScreen;
