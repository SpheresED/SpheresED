import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginLeft: 10,
  },
  itemContainer: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCE6F1",
  },
  imageContainer: {
    height: 60,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  textContainer: {
    height: 60,
    justifyContent: "center",
  },
  text: {
    color: "#133746",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
