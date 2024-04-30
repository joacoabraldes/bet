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

/*KEYS:
3cd4cde4cb2c3121e3400910ddda3d9b
*/
const apiKey = "aca6bcc83b4086354791912e79b960fb";

const leagues = [
  "soccer_argentina_primera_division",
  "soccer_epl",
  "soccer_france_ligue_one",
  "soccer_germany_bundesliga",
  "soccer_italy_serie_a",
  "soccer_spain_la_liga",
];

const HomeScreen = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [oddsAndPayout, setOddsAndPayout] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("soccer_epl");
  const [isLoading, setIsLoading] = useState(true);
  const [showBetView, setShowBetView] = useState(false);
  const [betList, setBetList] = useState([]);

  const clearBetList = () => {
    setBetList([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsApiUrl = `https://api.the-odds-api.com/v4/sports/${selectedLeague}/scores`;
        const oddsApiUrl = `https://api.the-odds-api.com/v4/sports/${selectedLeague}/odds/`;

        console.log(eventsApiUrl, oddsApiUrl);
        // Fetch upcoming events
        const eventsResponse = await axios.get(eventsApiUrl, {
          params: { apiKey },
        });
        setUpcomingEvents(eventsResponse.data);

        // Fetch odds and payout
        const oddsResponse = await axios.get(oddsApiUrl, {
          params: { apiKey, regions: "uk", markets: "h2h" },
        });
        setOddsAndPayout(oddsResponse.data);
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
          <Text style={styles.sectionHeading}>Live Matches</Text>
        </View>
        <View>
          <Text style={styles.sectionHeading}>Upcoming Matches</Text>
          {!isLoading ? (
            oddsAndPayout.length > 0 && upcomingEvents.length > 0 ? (
              <FlatList
                data={upcomingEvents}
                renderItem={({ item }) => {
                  // Find the odds for the current event
                  const odds = oddsAndPayout.find(
                    (oddsItem) => oddsItem.id === item.id
                  );
                  return (
                    <HomeCard
                      event={item}
                      oddsAndPayout={odds}
                      league={selectedLeague}
                      betList={betList}
                      setBetList={setBetList}
                    />
                  );
                }}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Text style={styles.sectionHeading}>
                aaaaaa oh no there are no matches in the argentina league
              </Text>
            )
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </View>
      {showBetView && <BetView betList={betList} clearBetList={clearBetList}/>}
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
    paddingTop: 20,
  },
  apostarButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  apostarButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
