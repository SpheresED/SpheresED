import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./styles";

const MyCourseCard = (props) => {
  const { myCourse } = props;

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.myCourse}>
          <Image style={styles.image} source={{ uri: myCourse.imageUri }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyCourseCard;
