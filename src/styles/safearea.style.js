import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  android__safearea: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

//backgroundColor: "#F2F2F2",

export default styles;
