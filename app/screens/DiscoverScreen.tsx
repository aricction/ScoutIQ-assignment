import {View , Text, FlatList} from "react-native";
import athletes from "../data/athletes.json";
import AthleteCard from "../components/AthleteCard";
import FilterChips from "../components/FilterChips";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { debounce } from "../utils/debounce";

export default function DiscoverScreen( {navigation}: any){
    const [selectedSport, setSelectedSport] = useState("All");
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    
    const debouncedSearch = debounce((text: string)=> setQuery(text), 300);
    
    
    const handleSearch = (text: string)=>{
        setSearch(text);
        debouncedSearch(text);
    }


    const filteredAthletes =  athletes.filter((a)=>
    selectedSport ==="All" ? true: a.sport === selectedSport)
    .filter((a)=> a.name.toLowerCase().includes(query.toLowerCase() || ""));


    return (
      <View style={{ flex: 1, padding: 16 }}>
  <SearchBar value={search} onChange={handleSearch} />

  <FilterChips
    selected={selectedSport}
    onSelect={setSelectedSport}
  />

  <Text style={{ marginBottom: 8 }}>
    {filteredAthletes.length == 0 && (
        <Text> No athletes Found </Text>
    )}
  </Text>

  <FlatList
    data={filteredAthletes}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <AthleteCard athlete={item} />
    )}
  />
</View>
    )
}