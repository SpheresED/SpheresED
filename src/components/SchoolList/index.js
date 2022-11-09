import { View, FlatList } from "react-native";
import SchoolItem from "../SchoolItem";
import styles from "./styles";

const SchoolList = (props) => {
  console.log(props);
  <View style={styles.container}>
    {/*Display Flatlist of Schools*/}
    <FlatList
      data={props.schools}
      renderItem={({ item }) => <SchoolItem school={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  </View>;
};

export default SchoolList;
