import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container__success: {
    marginTop: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(37,74,90,1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },

  container__error: {
    marginTop: 10,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(242, 119, 75, 1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },

  container__warning: {
    marginTop: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(255,204,127,1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },

  feedback__text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    marginLeft: 15,
  },
});

export default styles;
