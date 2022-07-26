import { View, Text } from "react-native";
import React from "react";

export default function MealDeatilScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>Meals Deatils Screen {mealId}</Text>
    </View>
  );
}
