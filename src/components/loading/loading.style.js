import { StyleSheet, Dimensions } from "react-native";
const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    width: widthScreen,
    height: heightScreen,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
  },
});

export default styles;
