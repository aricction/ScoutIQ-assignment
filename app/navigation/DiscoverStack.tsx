import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoverScreen from "../screens/DiscoverScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShortlistScreen from "../screens/Shortlistscreen";

const Stack = createNativeStackNavigator();
export default function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Shortlist" component={ShortlistScreen} />
    </Stack.Navigator>
  );
}
