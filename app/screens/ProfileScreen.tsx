import { View, Text ,StyleSheet, Button , TouchableOpacity} from "react-native";
import { useShortlist } from "../store/shortlistStore";
import ProgressBar from "../components/ProgressBar";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function ProfileScreen({ route }: any) {
  const { athlete } = route.params;
 const {shortlist, toggleShortlist } = useShortlist();
  
 const isAdded = shortlist.some((a:any)=> a.id === athlete.id);
 const score = scoreCalculator(athlete.stats);

 return (
    <View style={[styles.ProfileCard, { padding: 16,  flex: 1, backgroundColor: "#f8fafc" }]}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>
  {athlete.name}
</Text>

<Text style={{ color: "#666", marginBottom: 10 }}>
  {athlete.sport} • {athlete.position}
</Text>
   <View style={styles.stats}>
  <Text style={styles.statText}>Age : {athlete.age}</Text>
<View style={{ marginTop: 10 }}>
  <Text>Speed: {athlete.stats.speed}</Text>
  <Text>Stamina: {athlete.stats.stamina}</Text>
  <Text>Accuracy: {athlete.stats.accuracy}</Text>
</View>
</View>
    <View>
      <Text style={[styles.statText, { marginTop: 10 }]}>Readiness Score : {score}% </Text>
      <ProgressBar value={score} />
      <Text></Text>
    </View>

    <TouchableOpacity
  style={{
    marginTop: 16,
    padding: 12,
    backgroundColor: isAdded ? "#ef4444" : "#16a34a",
    borderRadius: 10
  }}
  onPress={() => toggleShortlist(athlete)}
>
  <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
    {isAdded ? "Remove from Shortlist" : "Add to Shortlist"}
  </Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create ({

   ProfileCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 10,
    padding: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "#2A0F38",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },

  stats: {  
    paddingTop: 5 , 
     gap: 4,
  },

  statText: {
  fontSize: 14,
  fontWeight: "600"
},

ButtonStyle: {
  marginTop: 10
}


})