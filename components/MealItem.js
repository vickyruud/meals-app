import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  id,
}) {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDeatil", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsText}>{duration}m</Text>
            <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsText}>
              {affordability.toUpperCase()}
            </Text>
          </View>
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
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
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
  buttonPressed: {
    opacity: 0.5,
  },
});
