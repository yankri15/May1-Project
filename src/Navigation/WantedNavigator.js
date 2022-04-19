import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import FeedScreen from "../Screens/UserScreens/FeedScreen";
import MapScreen from "../Screens/UserScreens/MapScreen";
import ProfileScreen from "../Screens/UserScreens/ProfileScreen";
import SearchResultScreen from "../Screens/UserScreens/SearchResultScreen";
import SettingsScreen from "../Screens/UserScreens/SettingsScreen";
import WantedScreen from "../Screens/UserScreens/WantedScreen";

const UserStack = createNativeStackNavigator();

const WantedNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="Wanted" component={WantedScreen} />
      <UserStack.Screen name="Feed" component={FeedScreen} />
      <UserStack.Screen name="Map" component={MapScreen} />
      <UserStack.Screen name="Profile" component={ProfileScreen} />
      <UserStack.Screen name="SearchResult" component={SearchResultScreen} />
      <UserStack.Screen name="Settings" component={SettingsScreen} />
    </UserStack.Navigator>
  );
};

export default WantedNavigator;
