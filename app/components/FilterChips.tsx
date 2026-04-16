import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

const sports = ["All", "Football", "Cricket", "Basketball"];

export default function FilterChips({ selected, onSelect }: any) {
  const [open, setOpen] = useState(false);

  const handleSelect = (sport: string) => {
    onSelect(sport);
    setOpen(false); // collapse after selection
  };

  return (
    <View style={styles.container}>
      {/* Selected chip (dropdown trigger) */}
      <TouchableOpacity
        style={styles.selectedChip}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.selectedText}>
          {selected} ▼
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport}
              style={[
                styles.chip,
                selected === sport && styles.activeChip,
              ]}
              onPress={() => handleSelect(sport)}
            >
              <Text
                style={[
                  styles.text,
                  selected === sport && styles.activeText,
                ]}
              >
                {sport}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },

  selectedChip: {
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 8,
  },

  selectedText: {
    color: "#fff",
    fontWeight: "600",
  },

  dropdown: {
  marginTop: 8,
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 8,
  elevation: 4,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 6
},

  chip: {
    justifyContent: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: "#eee",
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