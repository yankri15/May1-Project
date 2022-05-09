import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import AuthProvider from "./src/AuthProvider/AuthProvider";
import MainContainer from "./src/Navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserDataProvider from "./src/AuthProvider/UserDataProvider";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserDataProvider>
          <SafeAreaProvider>
            <MainContainer />
          </SafeAreaProvider>
        </UserDataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
