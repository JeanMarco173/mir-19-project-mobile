import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  header__container: {
    marginTop: 10,
    width: "100%",
    height: 45,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title__header: {
    color: "#254A5A",
    fontSize: 18,
    fontWeight: Platform === "ios" ? "700" : "bold",
  },

  cancel__button: {
    color: "#254A5A",
    fontSize: 18,
    fontWeight: Platform === "ios" ? "700" : "bold",
  },

  cancel__text: {
    color: "#FFCC7F",
    fontSize: 16,
    fontWeight: Platform === "ios" ? "700" : "bold",
  },

  body__container: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },

  body__text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: Platform === "ios" ? "600" : "normal",
    textAlign: "center",
  },

  action__container: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  action__text: {
    color: "#FFCC7F",
    fontSize: 20,
    fontWeight: Platform === "ios" ? "700" : "bold",
  },
});

export default styles;
