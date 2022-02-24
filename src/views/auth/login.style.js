import { StyleSheet, Dimensions } from "react-native";
const bodyHeight = Dimensions.get("screen").height - 60;

const styles = StyleSheet.create({
  body__container: {
    width: "100%",
    height: bodyHeight,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 25,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: 30,
  },

  input__form__container: {
    width: "100%",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "white",
    height: 45,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    color: "#276C91",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "400" : "normal",
  },

  action__container: {
    width: "100%",
    left: 25,
    position: "absolute",
    bottom: 75,
  },
});

export default styles;
