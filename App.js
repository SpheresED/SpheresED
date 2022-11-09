import React from "react";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { activateKeepAwake } from "expo-keep-awake";

import useCachedResources from "./hooks/useCachedResources";

import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  activateKeepAwake();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  }
}
