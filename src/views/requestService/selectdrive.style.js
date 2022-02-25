import { StyleSheet, Dimensions, Platform } from "react-native";
const bodyHeight = Dimensions.get("screen").height - 60;

const styles = StyleSheet.create({
  map__container: {
    width: "100%",
    height: bodyHeight * 0.6,
    backgroundColor: "#F2F2F2",
    overflow: "hidden",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  content__container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: bodyHeight * 0.4,
    backgroundColor: "#254A5A",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  drivers__container: {
    width: "100%",
    height: bodyHeight * 0.22,
  },

  driver__button: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  driver__button__selected: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FFCC7F",
  },

  driver__icon__container: {
    width: "30%",
  },

  driver__icon: {
    width: 55,
    height: 24,
    resizeMode: "contain",
  },

  driver__text__container: {
    width: "40%",
  },

  driver__text: {
    color: "#276C91",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "400" : "normal",
  },

  price__text__container: {
    width: "30%",
  },

  price__text: {
    textAlign: "right",
    color: "#276C91",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
  },

  action__container: {
    width: "100%",
    left: 25,
    position: "absolute",
    bottom: Platform.OS === "ios" ? 100 : 30,
  },
});

export default styles;
