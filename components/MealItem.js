import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function MealItem({ meal }) {
  return (
    <View>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text>{meal.duration}</Text>
          <Text>{meal.complexity}</Text>
          <Text>{meal.affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  detailsView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
