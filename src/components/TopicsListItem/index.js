import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const TopicsListItem = (props) => {
  const { topic } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("TopicScreen", {
      selectedTopic: { topic },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* Image */}
        <Image source={{ uri: topic.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          {/* Topic */}
          <Text style={styles.topic}>{topic.topic}</Text>
          {/* Tutor */}
          <Text style={styles.tutor}>{topic.tutor}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopicsListItem;
