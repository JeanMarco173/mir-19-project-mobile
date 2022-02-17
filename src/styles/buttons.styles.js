import { StyleSheet } from "react-native";

const primaryButtonStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    backgroundColor: "#FFCC7F",
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "#254A5A",
  },
});

export { primaryButtonStyle };
