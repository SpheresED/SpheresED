import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import CourseComponent from "../CourseComponent";

const CourseCategory = (props) => (
  <View style={styles.container}>
    {/*Title of Category*/}
    <Text style={styles.title}>{props.title}</Text>
    {/*List of Courses*/}
    <FlatList
      data={props.courses}
      renderItem={({ item }) => <CourseComponent course={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default CourseCategory;
