import {View , FlatList} from "react-native";
import athletes from "../data/athletes.json";
import AthleteCard from "../components/AthleteCard";

export default function DiscoverScreen( {navigation}: any){
    return (
          <View style={{ flex: 1, padding: 16}}>
          <FlatList
          data={athletes}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> (
            <AthleteCard
            athlete={item}
            onPress = {()=> navigation.navigate("Profile", {athlete: item})}>

            </AthleteCard>
          )}>

          </FlatList>
          </View>
    )
}