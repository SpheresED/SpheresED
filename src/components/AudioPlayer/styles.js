import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "95%",
    backgroundColor: "#F0FAFF",
    borderRadius: 4,
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#002F47",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  timeStamp: {
    flexDirection: "row",
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  time: {
    color: "#002F47",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 4,
    marginRight: 4,
    alignItems: "baseline",
  },
  touch: {
    alignItems: "center",
  },
});

export default styles;
