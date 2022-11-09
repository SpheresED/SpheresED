import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const SchoolItem = (props) => {
  const { schoolName, emblemUri, courses, departments } = props.school;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("InstitutionScreen", {
      selectedInstitution: { schoolName, emblemUri, courses, departments },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.itemContainer}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: emblemUri }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{schoolName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SchoolItem;
