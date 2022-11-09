import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    padding: 5,
    borderRadius: 9999,
    backgroundColor: "#F0FAFF",
    position: "absolute",
  },
  topic: {
    color: "#133746",
    fontSize: 20,
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  schoolName: {
    color: "#133746",
    fontSize: 16,
    marginRight: 3,
  },
  course: {
    color: "#133746",
    marginLeft: 3,
    fontSize: 16,
  },
  button: {
    margin: 5,
    backgroundColor: "#2C7FA3",
    width: 80,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    margin: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
