import { View, Text ,StyleSheet} from "react-native";

export default function ProfileScreen({ route }: any) {
  const { athlete } = route.params;

  return (
    <View style={styles.Profile}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {athlete.name}
      </Text>
      
      <Text >{athlete.sport}</Text>
     <Text style={{fontSize: 11, paddingTop: 5 }} >Age: {athlete.age}</Text>
      <Text style={{fontSize: 11, paddingTop: 5 }}>Position: {athlete.position}</Text>
           <Text >Speed {athlete.stats.speed}</Text>
           <Text>Stamina {athlete.stats.stamina}</Text>
           <Text>accuracy {athlete.stats.accuracy}</Text>


    </View>
  );
}

const styles = StyleSheet.create ({

   Profile: {
    padding: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "#2A0F38" 
}


})