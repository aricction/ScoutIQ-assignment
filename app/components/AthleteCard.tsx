import { Text,TouchableOpacity, View, StyleSheet } from "react-native";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function AthleteCard({ athlete, onPress }: any) {
  const score = scoreCalculator(athlete.stats);
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.name}>{athlete.name}</Text>
        <Text >{athlete.sport} {athlete.position}</Text>
        <Text>{athlete.age}</Text>
       <Text style={styles.score}>{score}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  score: {
    marginTop: 5,
    fontWeight: "600"
  }
});