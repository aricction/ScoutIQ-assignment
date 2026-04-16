import AthleteCard from "../components/AthleteCard";
import { useShortlist } from "../store/shortlistStore";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { scoreCalculator } from "../utils/scoreCalculator";

export default function ShortlistScreen() {
  const { shortlist, toggleShortlist } = useShortlist();

  const avgScore =
    shortlist.length === 0
      ? 0
      : Math.round(
          shortlist.reduce(
            (sum: number, a: any) => sum + scoreCalculator(a.stats),
            0,
          ) / shortlist.length,
        );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f8fafc" }}>
      <Text style={{ fontWeight: "bold" }}>
        Shortlisted: {shortlist.length}
      </Text>

      <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
        Average Score: {avgScore}
      </Text>

      {shortlist.length === 0 && (
        <Text style={{ marginTop: 20 }}>
          No athletes shortlisted yet. Go to Discover and add some!
        </Text>
      )}

      <FlatList
        data={shortlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 1,
              borderRadius: 10,
            }}
          >
            <AthleteCard athlete={item} />

            <TouchableOpacity
              style={{
                marginTop: 16,
                padding: 12,
                backgroundColor: "#ff4a02",
                borderRadius: 10,
              }}
              onPress={() => toggleShortlist(item)}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Remove from Shortlist
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
