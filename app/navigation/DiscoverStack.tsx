import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoverScreen from "../screens/DiscoverScreen";

const Stack = createNativeStackNavigator();
export default function DiscoverStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Discover" component={DiscoverScreen} />
        </Stack.Navigator>
    )
}