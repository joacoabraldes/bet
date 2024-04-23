import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const premierLeagueTeams = {
  Arsenal: require('../img/uk/arsenal.png'),
  AstonVilla: require('../img/uk/astonvilla.png'),
  Bournemouth: require('../img/uk/bournemouth.png'),
  Brentford: require('../img/uk/brentford.png'),
  BrightonandHoveAlbion: require('../img/uk/brighton.png'),
  Burnley: require('../img/uk/burnley.png'),
  Chelsea: require('../img/uk/chelsea.png'),
  CrystalPalace: require('../img/uk/crystalpalace.png'),
  Everton: require('../img/uk/everton.png'),
  Fulham: require('../img/uk/fulham.png'),
  Liverpool: require('../img/uk/liverpool.png'),
  Luton: require('../img/uk/luton_town.png'),
  ManchesterCity: require('../img/uk/manchestercity.png'),
  ManchesterUnited: require('../img/uk/manchesterunited.png'),
  NewcastleUnited: require('../img/uk/newcastle.png'),
  NottinghamForest: require('../img/uk/nottingham_forest.png'),
  SheffieldUnited: require('../img/uk/sheffield.png'),
  TottenhamHotspur: require('../img/uk/tottenham.png'),
  WestHamUnited: require('../img/uk/westham.png'),
  WolverhamptonWanderers: require('../img/uk/wolves.png'),
};

const HomeCard = ({ event }) => {
  const team1Logo = premierLeagueTeams[event.home_team.replace(/\s+/g, '')];
  const team2Logo = premierLeagueTeams[event.away_team.replace(/\s+/g, '')];

  // Parse ISO 8601 formatted time
  const dateObj = new Date(event.commence_time);
  // Extract day, month, hours, and minutes
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Months are 0-based, so we add 1
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();

  // Format day, month, hours, and minutes with leading zeros if needed
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedHours = hours < 10 ? '0' + hours - 3 : hours - 3;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the date-time string
  const formattedDateTime = `${formattedDay}/${formattedMonth} - ${formattedHours}:${formattedMinutes}`;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.teamsContainer}>
          <View style={styles.teamContainer}>
            <Image source={team1Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.teamName}>{event.home_team}</Text>
          </View>
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          <View style={styles.teamContainer}>
            <Image source={team2Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.teamName}>{event.away_team}</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.dateTime}>{formattedDateTime}</Text>
          <Text style={styles.location}>{event.sport_title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%', // Set the width to 80% of the parent container
    alignSelf: 'center', // Center the card horizontally
  },
  card: {
    backgroundColor: '#121212', // Dark theme background color
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#555', // Border color
    borderTopWidth: 1,
    borderTopColor: '#777', // Lighter color for top border
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
    height: 70, // Set a fixed height for the logo container
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  teamName: {
    fontSize: 11, // Decrease font size to 14
    fontWeight: 'bold',
    color: '#fff', // White color for team names
    textAlign: 'center', // Center text horizontally
  },
  vsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  vsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White color for VS text
  },
  detailsContainer: {
    alignItems: 'center',
  },
  dateTime: {
    fontSize: 12,
    color: '#fff', // White color for date/time text
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#999', // Lighter color for location text
  },
});

export default HomeCard;
