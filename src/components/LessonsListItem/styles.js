import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "#CCE6F1",
    paddingBottom: 5,
    backgroundColor: "white",
  },
  image: {
    width: 60,
    height: 60,
  },
  rightContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 5,
  },
  lesson: {
    marginTop: 5,
    color: "#133746",
    fontSize: 16,
    fontWeight: "bold",
  },
  duration: {
    color: "#133746",
  },
  tutor: {
    color: "#133746",
  },
  container2: {
    flexDirection: "row",
    flex: 1,
  },
  break: {
    color: "#133746",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
