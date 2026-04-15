
import { Text , View , TouchableOpacity , StyleSheet, TextInput } from "react-native"

export default function SearchBar({value ,onChange}: any) {
    return (
        <View style={styles.container}>
           <TextInput 
           placeholder="search..."
           value={value}
           onChangeText={onChange}
           style={styles.input}/>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12
  },
  input: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8
  }
});