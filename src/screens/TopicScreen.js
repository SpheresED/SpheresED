import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { FlatList } from "react-native";
import TopicHeader from "../components/TopicHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import LessonsListItem from "../components/LessonsListItem";

const TopicScreen = ({ route }) => {
  const navigation = useNavigation();

  const topic = route.params.selectedTopic;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      <View style={styles.topicHeader}>
        <TopicHeader topic={topic} />
      </View>
      {topic.topic.lessons.length > 0 ? (
        <FlatList
          data={topic.topic.lessons}
          renderItem={({ item }) => <LessonsListItem lesson={item} />}
          keyExtractor={(item) => item.id}
          vertical
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.conditionalText}>Lessons will release soon!!!</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topicHeader: {
    width: "100%",
    paddingBottom: 6,
  },
  conditionalText: {
    alignSelf: "center",
    textAlignVertical: "center",
    paddingBottom: 400,
    height: "100%",
    color: "#133746",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TopicScreen;
