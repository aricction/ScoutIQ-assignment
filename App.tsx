import { NavigationContainer } from "@react-navigation/native";
import DiscoverStack from "./app/navigation/DiscoverStack";
import { ShortlistProvider } from "./app/store/shortlistStore";
import TabNavigator from "./app/navigation/TabNavigator";
export default function App() {
  return (
    <ShortlistProvider>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </ShortlistProvider>
  );
}