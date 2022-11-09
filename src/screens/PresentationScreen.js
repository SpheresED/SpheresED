import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import PictureComponent from "../components/PictureComponent";

import lessonDetails from "../../data/lessonDetails";
import AudioPlayer from "../components/AudioPlayer";

const { width, height } = Dimensions.get("screen");

const PresentationScreen = ({ route }) => {
  const lessonDetails = route.params.selectedLesson;

  const navigation = useNavigation();
  const xScroll = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/*Top Container*/}
        <View style={styles.topContainer}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.topButton}
          >
            <EvilIcons name="chevron-left" size={30} color="#002F47" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <Feather name="chevrons-left" size={30} color="#002F47" />
          </TouchableOpacity>
          <Text style={styles.lessonTitle}>{lessonDetails.lesson.lesson}</Text>
          <TouchableOpacity style={styles.topButton}>
            <Feather name="chevrons-right" size={30} color="#002F47" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <EvilIcons name="share-google" size={30} color="#002F47" />
          </TouchableOpacity>
        </View>
        {/*Image Container*/}
        <View style={styles.imageContainer}>
          <Animated.FlatList
            style={styles.flatlist}
            data={lessonDetails.lesson.pictures}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate={"normal"}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xScroll } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const outputRange = ["45deg", "0deg", "45deg"];

              const translateX = xScroll.interpolate({
                inputRange,
                outputRange,
              });
              return (
                <Animated.View
                  style={[
                    styles.wrap,
                    { transform: [{ rotateZ: translateX }] },
                  ]}
                >
                  <PictureComponent picture={item} style={styles.pictures} />
                </Animated.View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/*Controller Container*/}
        <View style={styles.bottomContainer}>
          <AudioPlayer uri={lessonDetails.lesson.url} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "7.5%",
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#F0FAFF",
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderRadius: 15,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topButton: {
    width: 30,
    borderRadius: 9999,
  },
  lessonTitle: {
    color: "#002F47",
    fontSize: 16,
  },
  imageContainer: {
    height: "78%",
    width,
    marginLeft: 4,
    marginRight: 4,
    paddingTop: 12,
    paddingBottom: 20,
  },
  pictures: {
    width: width - 150,
    resizeMode: "cover",
  },
  bottomContainer: {
    height: "14%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PresentationScreen;
