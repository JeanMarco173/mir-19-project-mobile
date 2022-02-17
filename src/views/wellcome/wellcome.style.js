import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header__container: {
    width: "100%",
    height: Dimensions.get("window").height / 2,
    borderBottomEndRadius: 175,
    borderBottomStartRadius: 175,
    backgroundColor: "rgba(37,74,90,0.25)",
  },

  header__image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  body__container: {
    width: "100%",
    height: Dimensions.get("window").height / 2,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  login__container: {
    marginTop: 25,
    width: "100%",
    height: 120,
    justifyContent: "space-between",
  },

  contact__container: {
    width: "100%",
    height: 30,
    position: "absolute",
    bottom: 65,
    left: 25,
    alignItems: "center",
  },
});

export default styles;
