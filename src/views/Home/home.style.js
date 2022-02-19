import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main__container: {
    paddingHorizontal: 25,
    marginTop: 25,
  },

  move__house__button: {
    width: "100%",
    height: 150,
    backgroundColor: "#FFCC7F",
    borderRadius: 10,
    flexDirection: "row",
  },

  move__house__icon__container: {
    width: "40%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  move__house__icon: {
    width: 120,
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 60,
  },

  move__house__text__container: {
    width: "60%",
    height: 150,
    paddingRight: 20,
    justifyContent: "center",
  },

  move__house__text: {
    fontSize: 32,
    fontWeight: "700",
    color: "#276C91",
    textAlign: "right",
  },

  help__text: {
    color: "#276C91",
    fontSize: 18,
    fontWeight: "500",
  },

  ship__container: {
    width: "100%",
    marginTop: 35,
  },

  request__ship__container: {
    width: "100%",
    marginTop: 35,
  },

  hr: {
    width: "98%",
    height: 2,
    marginVertical: 20,
    backgroundColor: "#276C91",
    marginLeft: "1%",
    marginRight: "1%",
  },

  addresses__container: {
    width: "100%",
    height: "50%",
    marginTop: 10,
    paddingHorizontal: 25,
  },

  add__address__button: {
    height: 45,
    justifyContent: "center",
  },

  add__address__text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#276C91",
    textAlign: "center",
  },
});

export default styles;
