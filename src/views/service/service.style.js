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

  service__status__container: {
    top: 20,
    position: "absolute",
    marginHorizontal: "5%",
    width: "90%",
    height: 45,
    backgroundColor: "#254A5A",
    borderRadius: 10,
    justifyContent: "center",
  },

  service__status__text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
  },

  content__container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: bodyHeight * 0.4,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  driver__container: {
    width: "100%",
    height: 150,
    backgroundColor: "#254A5A",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },

  driver__avatar__container: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  driver__avatar: {
    maxWidth: 110,
    height: 110,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
    borderRadius: 70,
  },

  driver__info__container: {
    width: "60%",
    justifyContent: "center",
  },

  driver__name__text: {
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
  },

  driver__car__text: {
    marginTop: 5,
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: Platform.OS === "ios" ? "500" : "normal",
  },

  driver__rating__container: {
    marginTop: 5,
    flexDirection: "row",
  },

  service__info__container: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  service__info: {
    width: "48%",
    justifyContent: "center",
    backgroundColor: "#254A5A",
    borderRadius: 10,
  },

  service__info__text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "600" : "normal",
  },
});

export default styles;
