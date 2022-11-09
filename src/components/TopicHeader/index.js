import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const TopicHeader = (props) => {
  const { topic } = props.topic;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/*Cover Image*/}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: topic.imageUri,
          }}
          style={styles.image}
        />
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <EvilIcons name="chevron-left" size={40} color="#002F47" />
        </TouchableOpacity>
      </View>

      {/*Topic*/}
      <Text style={styles.topic}>{topic.topic}</Text>
      {/*Course and School*/}
      <View style={styles.container2}>
        <Text style={styles.schoolName}>{topic.schoolName}</Text>
        <Text>&#8226;</Text>
        <Text style={styles.course}>{topic.course}</Text>
      </View>
      {/*Play Button*/}
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopicHeader;
