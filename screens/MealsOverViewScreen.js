import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import React from "react";

export default function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>MealsOverViewScreen!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
