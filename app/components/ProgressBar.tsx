import { View , StyleSheet} from "react-native";

export default function ProgressBar({value}: {value: number}) {
    return (
        <View style={styles.container}>
            <View style={[styles.fill, { width: `${value}%`}, {backgroundColor: value > 80 ? "green" : value > 50 ? "orange" : "red"}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  fill: {
    height: "100%",
    backgroundColor: "green"
  }
});