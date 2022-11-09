import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PageNavigation from "../../pagesNavigation";

const InstitutionScreen = ({ route }) => {
  const navigation = useNavigation();
  const institutionData = route.params.selectedInstitution;

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 10,
        paddingLeft: 5,
      }}
    >
      <View style={styles.screenHeader}>
        <View style={styles.topRow}>
          {/*Back button*/}
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.backButton}
          >
            <EvilIcons name="chevron-left" size={40} color="#002F47" />
          </TouchableOpacity>
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
      </View>
      <PageNavigation data={institutionData} />
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
    paddingTop: 10,
  },
  emblem: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    padding: 16,
  },
  text: {
    color: "#133746",
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  coursesContainer: {},
});

export default InstitutionScreen;
