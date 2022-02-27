import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  title__text: {
    color: "#276C91",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
  },

  title__text__dark: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
  },

  header__text: {
    color: "#254A5A",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
    marginHorizontal: "30%",
  },

  header__text__left: {
    color: "#254A5A",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
  },

  sub__title: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
  },

  label__title: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
  },

  help__text: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: "500",
  },

  error__text: {
    marginTop: 5,
    color: "#F2774B",
    fontSize: 14,
    fontWeight: Platform.OS === "ios" ? "600" : "normal",
  },
});

export default styles;
