import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import courseDetails from "../../data/courseDetails";
import TopicsListItem from "../components/TopicsListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const CourseScreen = ({ route }) => {
  const navigation = useNavigation();

  const courseData = route.params.selectedCourse;

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingTop: 7.5 }}
    >
      {/*Header-- Back Arrow and Search Bar*/}
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.backButton}
          >
            <EvilIcons name="chevron-left" size={40} color="#002F47" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <View style={styles.searchInner}>
              <Ionicons
                name="ios-search-outline"
                size={20}
                color="#CCEEFF"
                style={{ padding: 5 }}
              />
              <TextInput
                placeholder="Find Lessons"
                keyboardType="default"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
        {courseData.course.topics.length > 0 ? (
          <FlatList
            data={courseData.course.topics}
            renderItem={({ item }) => <TopicsListItem topic={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.conditionalText}>In the works!!!</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  backButton: {
    padding: 2,
    borderRadius: 9999,
    backgroundColor: "#F0FAFF",
  },
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 2,
    paddingBottom: 8,
    marginLeft: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0FAFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    marginHorizontal: 8,
    width: "80%",
  },
  searchInner: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 8,
    backgroundColor: "#F0FAFF",
    padding: 1,
    borderRadius: 50,
  },
  textInput: {
    color: "black",
  },
  conditionalText: {
    alignSelf: "center",
    textAlignVertical: "center",
    paddingBottom: 200,
    height: "100%",
    color: "#133746",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CourseScreen;
