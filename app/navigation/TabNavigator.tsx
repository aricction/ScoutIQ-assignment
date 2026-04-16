import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverStack from "./DiscoverStack";
import ShortlistScreen from "../screens/Shortlistscreen";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={DiscoverStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shortlist"
        component={ShortlistScreen}
      />
    </Tab.Navigator>
  );
}