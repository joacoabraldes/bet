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

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Text style={styles.cumulativeOdd}>Cumulative Odd: {cumulativeOdd}</Text>
      <View style={styles.betListContainer}>
        {betList.map((item, index) => (
          <View key={index} style={styles.betItem}>
            <Text style={styles.odd}>{item.match}     </Text>
            <Text style={styles.match}>{item.team} - {item.odd}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Wager Amount"
          keyboardType="numeric"
          value={wagerAmount}
          onChangeText={text => setWagerAmount(text)}
        />
        <Text style={styles.potentialWinnings}>${potentialWinnings.toFixed(2)}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={clearBetList} style={styles.trashButton}>
          <Icon name="trash" size={24} color="white" />
        </TouchableOpacity>
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
  cumulativeOdd: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  betListContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  betItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  match: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 'bold',
  },
  odd: {
    color: "#aaa",
    fontSize: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 30,
    width: "60%",
  },
  potentialWinnings: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  trashButton: {
    backgroundColor: "#e74c3c",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: "#78A083",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "70%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BetView;
