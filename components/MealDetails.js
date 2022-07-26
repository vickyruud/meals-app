import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.detailsView, style]}>
      <Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
