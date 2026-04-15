import { NavigationContainer } from "@react-navigation/native";
import DiscoverStack from "./app/navigation/DiscoverStack";
export default function App() {
  return (
    <NavigationContainer>
      <DiscoverStack />
    </NavigationContainer>
  );
}