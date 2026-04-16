import { Text,TouchableOpacity, View, StyleSheet } from "react-native";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function AthleteCard({ athlete, onPress }: any) {
  const score = scoreCalculator(athlete.stats);
  return (
    <View style={{ padding: 5}}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
       <Text style={styles.name}>{athlete.name}</Text>

<Text style={styles.meta}>
  {athlete.sport} • {athlete.position}
</Text>

<Text style={styles.meta}>Age: {athlete.age}</Text>

<Text style={[
  styles.score,
  { color: score > 80 ? "#16a34a" : score > 50 ? "#f59e0b" : "#ef4444" }
]}>
  Score: {score}
</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 }
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4
  },
  meta: {
    color: "#666",
    marginBottom: 6
  },
  score: {
    marginTop: 8,
    fontWeight: "600"
  }
});