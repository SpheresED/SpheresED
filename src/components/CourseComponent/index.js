import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import styles from "./styles";

const CourseComponent = (props) => {
  const { course } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CourseScreen", {
      selectedCourse: { course },
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.course.imageUri }} style={styles.image} />
        <View style={styles.textAlign}>
          <Text style={styles.school}>{props.course.SchoolName}</Text>
          <Text style={styles.text}>{props.course.tutorNames}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseComponent;
