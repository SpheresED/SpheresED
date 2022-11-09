import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginLeft: 5,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCE6F1",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 7,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#133746",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default styles;
