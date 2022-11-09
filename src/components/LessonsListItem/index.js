import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const LessonsListItem = (props) => {
  const { lesson } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("PresentationScreen", { selectedLesson: { lesson } });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/*Image*/}
        <Image source={{ uri: lesson.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          {/*Lesson*/}
          <Text>{lesson.lesson}</Text>
          {/*Tutor and Duration*/}
          <View style={styles.container2}>
            <Text style={styles.tutor}>{lesson.tutor}</Text>
            <Text style={styles.break}> | </Text>
            <Text style={styles.duration}>{lesson.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LessonsListItem;
