import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function MealItem({ imageUrl, title }) {
  return (
    <View>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
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
});
