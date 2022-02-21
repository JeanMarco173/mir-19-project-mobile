import { StyleSheet, Dimensions, Platform } from "react-native";
const bodyHeight = Dimensions.get("screen").height - 60;
const avoidingViewAndroid = bodyHeight - 300;
const avoidingViewIos = bodyHeight - 200;

/* console.log("bodyHeight", bodyHeight);
console.log("avoidingViewAndroid", avoidingViewAndroid);
console.log("avoidingViewIos", avoidingViewIos); */

const styles = StyleSheet.create({
  body__container: {
    width: "100%",
    height: bodyHeight,
    backgroundColor: "#F2F2F2",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  keyboardavoidingview__container: {
    width: "100%",
    paddingBottom: 120,
  },

  input__form__container: {
    width: "100%",
    marginBottom: 20,
  },

  input__form__button: {
    width: "100%",
    height: 45,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
  },

  input__form__text__placeholder: {
    color: "rgba(39,108,145,0.5)",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "300" : "normal",
  },

  input__form__text: {
    color: "#276C91",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "400" : "normal",
  },

  input__area__form: {
    width: "100%",
    height: 150,
    paddingHorizontal: 20,
    paddingTop: 15,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    color: "#276C91",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "400" : "normal",
    textAlignVertical: "top",
  },

  action__container: {
    width: "100%",
    left: 25,
    position: "absolute",
    bottom: 70,
  },
});

export default styles;
