import { StyleSheet, Dimensions } from "react-native";
const heigthSize = (Dimensions.get("screen").height - 60) / 2;

const styles = StyleSheet.create({
  header__container: {
    height: 60,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  finder__container: {
    width: "100%",
    height: heigthSize,
    paddingHorizontal: 25,
    paddingTop: 20,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: "#FFFFFF",
  },

  addresses__container: {
    /* position: "absolute",
    bottom: 0, */
    backgroundColor: "#254A5A",
    width: "100%",
    height: heigthSize,
    paddingHorizontal: 25,
    paddingTop: 20,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },

  addresses__scroll: {
    maxHeight: "75%",
    marginTop: 25,
  },
});

export default styles;
