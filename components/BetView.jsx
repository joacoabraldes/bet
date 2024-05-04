import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const BetView = ({ betList, onPress, clearBetList }) => {
  const translateY = useRef(new Animated.Value(100)).current;
  const [wagerAmount, setWagerAmount] = useState("");
  
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Calculate cumulative odd
  const cumulativeOdd = betList.reduce((acc, cur) => acc * cur.odd, 1).toFixed(2);
  const potentialWinnings = wagerAmount * cumulativeOdd;

  // Rendering logic for bet list
  let displayedBetList = betList;
  let hiddenBetCount = 0;
  if (betList.length > 4) {
    displayedBetList = betList.slice(0, 4);
    hiddenBetCount = betList.length - 4;
  }

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <TouchableOpacity onPress={clearBetList} style={styles.closeButton}>
        <Icon name="times" size={24} color="gray"/>
      </TouchableOpacity>
      <Text style={styles.cumulativeOdd}>{cumulativeOdd}</Text>
      <View style={styles.betListContainer}>
        {displayedBetList.map((item, index) => (
          <View key={index} style={styles.betItem}>
            <View style={styles.matchContainer}>
              <Icon name="circle" size={15} color="#aaa" style={styles.icon} />
              <View style={styles.matchNameContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.match}>{item.match}</Text>
              </View>
            </View>
            <Text style={styles.teamOdd}>{item.team} - {item.odd}</Text>
          </View>
        ))}
        {hiddenBetCount > 0 && <Text style={styles.match}>{`And ${hiddenBetCount} more`}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Wager Amount"
          placeholderTextColor="gray"
          keyboardType="numeric"
          value={wagerAmount}
          onChangeText={text => setWagerAmount(text)}
        />
        <Text style={styles.potentialWinnings}>${potentialWinnings.toFixed(2)}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>APOSTAR</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: "#222831",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  cumulativeOdd: {
    color: "#76ABAE",
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  betListContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  betItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    width: '90%', // Adjust width as needed
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  matchNameContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  match: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5, // Adjust spacing between icon and match
  },
  teamOdd: {
    color: "#76ABAE",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    flexShrink: 1,
  },
  icon: {
    marginRight: 5,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'transparent',
    marginHorizontal: 40,
    borderRadius: 0,
    padding: 12,
    paddingRight: 0,
    width: "70%",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 16,
    color: '#fff',
    width: '50%', 
  },
  potentialWinnings: {
    color: '#78A083',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: "#78A083",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

});

export default BetView;
