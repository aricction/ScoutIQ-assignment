import { View, Text } from "react-native";

export default function ProfileScreen({ route }: any) {
  const { athlete } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {athlete.name}
      </Text>
      <Text>{athlete.sport}</Text>
      <Text>{athlete.position}</Text>
     <Text>{athlete.age}</Text>
           <Text>Speed {athlete.stats.speed}</Text>
           <Text>Stamina {athlete.stats.stamina}</Text>
           <Text>accuracy {athlete.stats.accuracy}</Text>


    </View>
  );
}