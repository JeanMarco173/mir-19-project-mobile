import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  title__text: {
    color: "#276C91",
    fontSize: 24,
    fontWeight: "700",
  },

  title__text__dark: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  header__text: {
    color: "#254A5A",
    fontSize: 24,
    fontWeight: "700",
    marginHorizontal: "30%",
  },

  sub__title: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: Platform === "ios" ? "700" : "bold",
  },

  help__text: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
