import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import SchoolList from "../components/SchoolList";
import schools from "../../data/schools";
import { SafeAreaView } from "react-native-safe-area-context";
import SchoolItem from "../components/SchoolItem";

const SchoolsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <FlatList
        data={schools}
        renderItem={({ item }) => <SchoolItem school={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SchoolsScreen;
