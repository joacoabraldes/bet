import React , { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import { premierLeagueTeams, serieATeams, bundesligaTeams ,laLigaTeams,ligue1Teams,ligaArgentinaTeams} from '../assets/teamImages';


const HomeCard = ({ event, league,betList,setBetList }) => {
  const team1Logo = getTeamLogo(event.home, league);
  const team2Logo = getTeamLogo(event.away, league);
  const [pressedButton, setPressedButton] = useState(null);
  const match= event.home + " X " + event.away;

  const handlePress = (button, odd, team) => {
    const existingBet = betList.find(item => item.id === event.event_id);
  
    if (existingBet) {
      if(existingBet.team == team){
        const updatedBetList = betList.filter(item => !(item.id === event.event_id && item.team === team));
        setBetList(updatedBetList);
        setPressedButton(null); 
      }else{
        const updatedBetList = betList.filter(item => item.id !== event.event_id);
        setBetList([...updatedBetList, { id: event.event_id, odd, team,match }]);
        setPressedButton(button);
      }
    } else {
      setBetList([...betList, { id: event.event_id, odd, team ,match}]);
      setPressedButton(button); 
    }
  };

  const getButtonStyle = (button) => {
    return [styles.oddsItem, pressedButton === button && styles.pressedButton];
  };

  const getButtonTextStyle = (button) => {
    return [styles.odds, pressedButton === button && styles.pressedButtonText];
  };

  useEffect(() => {
    if (betList.length == 0) {
      setPressedButton(null); 
    } 
  }, [betList]);


  const homeTeamOutcome = event.periods.num_0.money_line?.home ?? '';
const drawOutcome = event.periods.num_0.money_line?.draw ?? '';
const awayTeamOutcome = event.periods.num_0.money_line?.away ?? '';

  // Parse ISO 8601 formatted time
  const dateObj = new Date(event.starts);
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
            <Text style={styles.teamName}>{event.home}</Text>
          </View>
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          <View style={styles.teamContainer}>
            <Image source={team2Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.teamName}>{event.away}</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.location}>{formattedDateTime}</Text>
        </View>
        <View style={styles.oddsContainer}>
        <TouchableOpacity
            style={getButtonStyle('home')}
            onPress={() => handlePress('home',homeTeamOutcome,event.home)}>
            <Text style={getButtonTextStyle('home')}>{homeTeamOutcome}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('draw')}
            onPress={() => handlePress('draw',drawOutcome,"Empate")}>
            <Text style={getButtonTextStyle('draw')}>{drawOutcome}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('away')}
            onPress={() => handlePress('away',awayTeamOutcome,event.away)}>
            <Text style={getButtonTextStyle('away')}>{awayTeamOutcome}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const getTeamLogo = (teamName, league) => {
  switch (league) {
    case 1980:
      return premierLeagueTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 2436:
      return serieATeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
      case 1842:
      return bundesligaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 210697:
      return ligaArgentinaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 2036:
      return ligue1Teams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 2196:
      return laLigaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    default:
      return require('../img/defaultLogo.png');
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#31363F',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    /*
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#555',
    borderTopWidth: 1,
    borderTopColor: '#777',
    */
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
    height: 70,
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  teamName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  vsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  vsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  dateTime: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  oddsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  oddsItem: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#76ABAE',
    padding: 8,
    borderRadius: 15,
    width: '20%',
  },
  odds: {
    fontSize: 10,
    color: '#76ABAE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressedButton: {
    borderWidth: 2,
    borderColor: '#76ABAE',
    backgroundColor: '#76ABAE',
  },
  pressedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeCard;
