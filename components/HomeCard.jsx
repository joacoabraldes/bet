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

const serieATeams = {
  AtalantaBC: require('../img/it/atalanta.png'),
  Bologna: require('../img/it/bologna.png'),
  Cagliari: require('../img/it/cagliari.png'),
  Empoli: require('../img/it/empoli.png'),
  Fiorentina: require('../img/it/fiorentina.png'),
  Frosinone: require('../img/it/frosinone.png'),
  Genoa: require('../img/it/genoa.png'),
  HellasVeronaFC: require('../img/it/hellasverona.png'),
  InterMilan: require('../img/it/inter.png'),
  Juventus: require('../img/it/juventus.png'),
  Lazio: require('../img/it/lazio.png'),
  Lecce: require('../img/it/lecce.png'),
  ACMilan: require('../img/it/milan.png'),
  Monza: require('../img/it/monza.png'),
  Napoli: require('../img/it/napoli.png'),
  ASRoma: require('../img/it/roma.png'),
  Salernitana: require('../img/it/salernitana.png'), 
  Sassuolo: require('../img/it/sassuolo.png'), 
  Torino: require('../img/it/torino.png'),
  Udinese: require('../img/it/udinese.png'), 
};

const bundesligaTeams = {
  Augsburg: require('../img/de/augsburgo.png'),
  BayerLeverkusen: require('../img/de/bayerleverkusen.png'),
  BayernMunich: require('../img/de/bayernmunchen.png'),
  BorussiaMonchengladbach: require('../img/de/bmonchengladbach.png'),
  VfLBochum: require('../img/de/bochum.png'),
  BorussiaDortmund: require('../img/de/borussiadortmund.png'),
  SVDarmstadt98: require('../img/de/darmstadt98​.png'),
  EintrachtFrankfurt: require('../img/de/eintrachtfrankfurt.png'),
  SCFreiburg: require('../img/de/freiburg.png'),
  FCHeidenheim: require('../img/de/heidenheim.png'),
  TSGHoffenheim: require('../img/de/hoffenheim.png'),
  FCKoln: require('../img/de/koln.png'),
  FSVMainz05: require('../img/de/mainz05.png'),
  RBLeipzig: require('../img/de/rbleipzig.png'),
  VfBStuttgart: require('../img/de/stuttgart.png'),
  UnionBerlin: require('../img/de/unionberlin.png'),
  WerderBremen: require('../img/de/werderbremen.png'),
  VfLWolfsburg: require('../img/de/wolfsburg.png'),
};

const ligaArgentinaTeams = {

};

const laLigaTeams = {
  Alavés: require('../img/es/alaves.png'),
  Almería: require('../img/es/almeria.png'),
  AthleticBilbao: require('../img/es/athletic.png'),
  AtléticoMadrid: require('../img/es/atlmadrid.png'),
  Barcelona: require('../img/es/barcelona.png'),
  RealBetis: require('../img/es/betis.png'),
  CádizCF: require('../img/es/cadiz.png'),
  CeltaVigo: require('../img/es/celta.png'),
  Getafe: require('../img/es/getafe.png'),
  Girona: require('../img/es/girona.png'),
  GranadaCF: require('../img/es/granada.png'),
  Mallorca: require('../img/es/mallorca.png'),
  CAOsasuna: require('../img/es/osasuna.png'),
  RayoVallecano: require('../img/es/rayovallecano.png'),
  RealMadrid: require('../img/es/realmadrid.png'),
  RealSociedad: require('../img/es/realsociedad.png'),
  Sevilla: require('../img/es/sevilla.png'),
  LasPalmas: require('../img/es/udlaspalmas.png'),
  Valencia: require('../img/es/valencia.png'),
  Villarreal: require('../img/es/villarreal.png'),
};

const ligue1Teams = {
  Amiens: require('../img/fr/amiens.png'),
  Clermont: require('../img/fr/clermont.png'),
  LeHavre: require('../img/fr/havre.png'),
  Lille: require('../img/fr/lille.png'),
  Lorient: require('../img/fr/lorient.png'),
  Metz: require('../img/fr/metz.png'),
  ASMonaco: require('../img/fr/monaco.png'),
  Montpellier: require('../img/fr/montpellier.png'),
  Nantes: require('../img/fr/nantes.png'),
  Nice: require('../img/fr/niza.png'),
  Marseille: require('../img/fr/olimpiquemarsella.png'),
  Lyon: require('../img/fr/olympiquelyon.png'),
  ParisSaintGermain: require('../img/fr/psg.png'),
  Strasbourg: require('../img/fr/racingetrasburgo.png'),
  RCLens: require('../img/fr/racinglens.png'),
  Rennes: require('../img/fr/rennais.png'),
  Brest: require('../img/fr/stadebretois.png'),
  StadedeReims: require('../img/fr/stadereims.png'),
  Toulouse: require('../img/fr/toulouse.png'),
};

const HomeCard = ({ event, oddsAndPayout, league }) => {
  const team1Logo = getTeamLogo(event.home_team, league);
  const team2Logo = getTeamLogo(event.away_team, league);

  let homeTeamOutcome = '';
  let drawOutcome = '';
  let awayTeamOutcome = '';

  if (oddsAndPayout) {
    const homeTeamData = oddsAndPayout.bookmakers[0].markets[0].outcomes.find(outcome => outcome.name === event.home_team);
    const drawData = oddsAndPayout.bookmakers[0].markets[0].outcomes.find(outcome => outcome.name === 'Draw');
    const awayTeamData = oddsAndPayout.bookmakers[0].markets[0].outcomes.find(outcome => outcome.name === event.away_team);

    homeTeamOutcome = homeTeamData ? homeTeamData.price : '';
    drawOutcome = drawData ? drawData.price : '';
    awayTeamOutcome = awayTeamData ? awayTeamData.price : '';
  }

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
          <Text style={styles.location}>{formattedDateTime}</Text>
        </View>
        <View style={styles.oddsContainer}>
          <View style={styles.oddsItem}>
            <Text style={styles.odds}>{homeTeamOutcome}</Text>
            <Text style={styles.outcomeText}>1</Text>
          </View>
          <View style={styles.oddsItem}>
            <Text style={styles.odds}>{drawOutcome}</Text>
            <Text style={styles.outcomeText}>X</Text>
          </View>
          <View style={styles.oddsItem}>
            <Text style={styles.odds}>{awayTeamOutcome}</Text>
            <Text style={styles.outcomeText}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const getTeamLogo = (teamName, league) => {
  switch (league) {
    case 'soccer_epl':
      return premierLeagueTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 'soccer_italy_serie_a':
      return serieATeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
      case 'soccer_germany_bundesliga':
      return bundesligaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 'soccer_argentina_primera_division':
      return ligaArgentinaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 'soccer_france_ligue_one':
      return ligue1Teams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    case 'soccer_spain_la_liga':
      return laLigaTeams[teamName.replace(/\s+/g, '')] || require('../img/defaultLogo.png');
    default:
      return require('../img/defaultLogo.png');
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#121212',
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
    borderColor: '#555',
    borderTopWidth: 1,
    borderTopColor: '#777',
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
  odds: {
    fontSize: 10,
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
  },
  oddsItem: {
    alignItems: 'center',
  },
  outcomeText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default HomeCard;
