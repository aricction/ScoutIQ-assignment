import { View, Text ,StyleSheet, Button} from "react-native";
import { useShortlist } from "../store/shortlistStore";
import ProgressBar from "../components/ProgressBar";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function ProfileScreen({ route }: any) {
  const { athlete } = route.params;
 const {shortlist, toggleShortlist } = useShortlist();
  
 const isAdded = shortlist.some((a:any)=> a.id === athlete.id);
 const score = scoreCalculator(athlete.stats);

 return (
    <View style={[styles.ProfileCard, { padding: 10 }]}>
      <Text style={{ fontSize: 20, fontWeight: "bold" , textAlign: "center", alignItems: "center"}}>
        {athlete.name}
      </Text>
      <Text >{athlete.sport}</Text>

   <View style={styles.stats}>
  <Text style={styles.statText}>Age : {athlete.age}</Text>
  <Text style={styles.statText}>Position : {athlete.position}</Text>
  <Text style={styles.statText}>Speed : {athlete.stats?.speed}</Text>
  <Text style={styles.statText}>Stamina : {athlete.stats?.stamina}</Text>
  <Text style={styles.statText}>Accuracy : {athlete.stats?.accuracy}</Text>
</View>
    <View>
      <Text style={[styles.statText, { marginTop: 10 }]}>Readiness Score : {score}% </Text>
      <ProgressBar value={score} />
      <Text></Text>
    </View>

       <View style={styles.ButtonStyle}>
  <Button
    title={isAdded ? "Remove from Shortlist" : "Add to Shortlist"}
    onPress={() => toggleShortlist(athlete)}
  />
</View>

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