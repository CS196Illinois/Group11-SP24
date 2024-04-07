import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import CreateScreen from "../CreateScreen";
import JoinScreen from "../JoinScreen";

//Top Tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name ="Join" component={JoinScreen}/>
            <TopTabs.Screen name ="Create" component={CreateScreen}/>
            
        </TopTabs.Navigator>
    )
}


//Bottom Tabs
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Home" component={TopTabsGroup} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
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