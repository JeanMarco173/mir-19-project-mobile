import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ship__container: {
    width: "100%",
    height: 150,
    backgroundColor: "#254A5A",
    borderRadius: 10,
    flexDirection: "row",
  },

  ship__icon__container: {
    width: "40%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  ship__icon: {
    width: 100,
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  ship__detail__container: {
    width: "60%",
    height: 150,
    paddingLeft: 20,
    paddingTop: 15,
  },

  ship__detail__title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFCC7F",
    textAlign: "left",
  },

  ship__detail: {
    width: "100%",
    flexDirection: "row",
    marginTop: 15,
  },

  detail__text__label: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFCC7F",
    textAlign: "left",
  },

  detail__text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "left",
    marginLeft: 10,
  },
});

export default styles;
