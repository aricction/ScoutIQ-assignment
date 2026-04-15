import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const sports = ["All", "Football", "Cricket", "Basketball"];

export default function FilterChips({ seleted, onSelect }: any) {
  return (
    <View>
      {sports.map((sport) => (
        <TouchableOpacity
          key={sport}
          style={[styles.chip, seleted === sport && styles.activeChip]}
          onPress={() => onSelect(sport)}
        >
          <Text>{sport}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 8,
  },
  activeChip: {
    backgroundColor: "#333",
  },
  text: {
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
  },
});
