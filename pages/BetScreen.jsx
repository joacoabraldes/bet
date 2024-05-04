import React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <Navbar money="2000"/>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  customHeader: {
    paddingTop: 20,
  },
});

export default BetScreen;
