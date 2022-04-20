import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthProvider from "./src/AuthProvider/AuthProvider";
import MainContainer from "./src/Navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainContainer />
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
