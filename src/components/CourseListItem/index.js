import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const CourseListItem = (props) => {
  const { course } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CourseScreen", {
      selectedCourse: { course },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.itemContainer}
      >
        <Image source={{ uri: course.imageUri }} style={styles.image} />
        <Text style={styles.text}>{course.courseTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourseListItem;
