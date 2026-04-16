import { Text,TouchableOpacity, View, StyleSheet } from "react-native";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function AthleteCard({ athlete, onPress }: any) {
  const score = scoreCalculator(athlete.stats);
  return (
    <View style={{ padding: 5}}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.name}>{athlete.name}</Text>
        <Text >{athlete.sport} {athlete.position}</Text>
        <Text>age : {athlete.age}</Text>
       <Text style={styles.score}>Score : {score}</Text>
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
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
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