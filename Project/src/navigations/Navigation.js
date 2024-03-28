import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen"

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}