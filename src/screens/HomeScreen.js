import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import user from "../../data/user";
import courseCategories from "../../data/courseCategories";
import MyCourseCard from "../components/MyCourseCard";
import CourseCategory from "../components/CourseCategory";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingTop: 7.5 }}
    >
      {/*Header-- Profile Image and Search Bar*/}
      <View style={styles.topContainer}>
        {/*Profile*/}
        <Image
          style={styles.image}
          source={{
            uri: user.photoUrl,
          }}
        />
        {/*Search*/}
        <View style={styles.searchContainer}>
          <View style={styles.searchInner}>
            <Ionicons
              name="ios-search-outline"
              size={20}
              color="#CCEEFF"
              style={{ padding: 5 }}
            />
            <TextInput
              placeholder="Find Courses"
              keyboardType="default"
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
      {/*Body -- MyCourses & Categories */}
      <View style={styles.myCoursesContainer}>
        <Text style={styles.yourCourses}>Your Courses</Text>
        <FlatList
          data={user.myCourses}
          renderItem={({ item }) => <MyCourseCard myCourse={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.courseCategories}>
        <FlatList
          data={courseCategories}
          renderItem={({ item }) => (
            <CourseCategory title={item.title} courses={item.courses} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    paddingBottom: 3,
    alignItems: "center",
    marginHorizontal: 2,
    marginLeft: 8,
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: "#D1D5DB",
    padding: 16,
    borderRadius: 9999,
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
  myCoursesContainer: {
    paddingLeft: 6,
  },
  yourCourses: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 4,
    color: "#133746",
  },
  courseCategories: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
