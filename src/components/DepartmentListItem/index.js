import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const DepartmentListItem = () => {
  const { department } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} style={styles.itemContainer}>
        <Image source={{ uri: department.imageUri }} style={styles.image} />
        <Text style={styles.text}>{department.departmentTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DepartmentListItem;
