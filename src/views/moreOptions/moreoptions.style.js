import { StyleSheet, Dimensions, Platform } from "react-native";
const bodyHeight = Dimensions.get("screen").height - 60;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: bodyHeight,
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  user__container: {
    width: "100%",
    height: 100,
    paddingHorizontal: 15,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#254A5A",
    borderRadius: 10,
  },

  user__avatar__button: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  user__avatar__photo: {
    width: 75,
    height: 75,
    borderRadius: 40,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
  },

  user__info__container: {
    width: "70%",
    justifyContent: "center",
  },

  user__text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "700" : "bold",
  },

  logout__button: {
    height: 45,
    justifyContent: "center",
  },

  logout__text: {
    color: "#254A5A",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "500" : "normal",
    textDecorationLine: "underline",
  },
});

export default styles;
