import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import user from "../../data/user";
import MyCourseCard from "../components/MyCourseCard";

const NavItem = ({ screenName, value, Icon }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(screenName)}
      style={{
        flexDirection: "row",
        height: 60,
        paddingLeft: 12,
        alignItems: "center",
      }}
    >
      {Icon}
      <Text style={{ fontSize: 16, marginLeft: 12, color: "#002F47" }}>
        {value}
      </Text>
    </Pressable>
  );
};

const LibraryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 2, backgroundColor: "white" }}>
      <View style={styles.courses}>
        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 10 }}>
          Your Courses
        </Text>
        <View style={styles.myCoursesContainer}>
          <FlatList
            data={user.myCourses}
            renderItem={({ item }) => <MyCourseCard myCourse={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.others}>
        <NavItem
          screenName="Downloads"
          value="Downloads"
          Icon={<Ionicons name="download-outline" size={30} color="#002F47" />}
        />
        <NavItem
          screenName="Notes"
          value="Notes"
          Icon={
            <MaterialCommunityIcons
              name="bookshelf"
              size={30}
              color="#002F47"
            />
          }
        />
        <NavItem
          screenName="Quizes"
          value="Quizes"
          Icon={
            <MaterialCommunityIcons
              name="head-question-outline"
              size={30}
              color="#002F47"
            />
          }
        />
        <NavItem
          screenName="Blog"
          value="Blog"
          Icon={<Fontisto name="blogger" size={30} color="#002F47" />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  courses: {
    height: "24%",
    paddingTop: 8,
    justifyContent: "center",
    alignContent: "baseline",
  },
  others: {},
};

export default LibraryScreen;
