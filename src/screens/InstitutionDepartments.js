import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CourseListItem from "../components/CourseListItem";
import DepartmentListItem from "../components/DepartmentListItem";

const InstitutionDepartments = ({ route }) => {
  const { schoolName, emblemUri, courses, departments } = route.params;

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 10,
        paddingLeft: 3,
      }}
    >
      <View style={styles.container}></View>
      <View style={styles.imgTextContainer}>
        <Image
          style={styles.emblem}
          source={{
            uri: emblemUri,
          }}
        />
        <Text style={styles.text}>{schoolName}</Text>
      </View>
      <View style={styles.coursesContainer}>
        {departments.length > 0 ? (
          <FlatList
            data={departments}
            renderItem={({ item }) => <DepartmentListItem department={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text
            style={{
              alignSelf: "center",
              textAlignVertical: "center",
              paddingBottom: 200,
              height: "100%",
              color: "#133746",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Departments Coming Onboard Soon!!!
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  topRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    borderRadius: 9999,
    backgroundColor: "#F0FAFF",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 40,
    width: 40,
  },
  screenHeader: {
    alignItems: "center",
    marginHorizontal: 2,
    marginLeft: 8,
    marginBottom: 8,
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
  topNavigationRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topNavigationText: {
    color: "gray",
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  imgTextContainer: {
    alignItems: "center",
    marginTop: -20,
    marginBottom: 10,
  },
  emblem: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    padding: 16,
    borderRadius: 9999,
  },
  text: {
    color: "#133746",
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  departmentsContainer: {},
});

export default InstitutionDepartments;
