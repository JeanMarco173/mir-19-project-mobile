import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { PresenceTransition } from "native-base";
import { CommonActions } from "@react-navigation/native";

import {
  getUserFromStorage,
  getTokenFromStorage,
} from "../../utils/asyncStorage/manageAsyncStorage.js";
import { setInitalStateLogin } from "../../store/user/user.slice.js";
import { useDispatch } from "react-redux";

import styles from "./wellcome.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const Wellcome = ({ navigation }) => {
  const dispatch = useDispatch();

  /**
   * resetNavigation to home
   */

  const goHome = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "ProtectedStack" }],
      })
    );
  /**
   * UI States and variables
   */
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const getCredentials = async () => {
      const token = await getTokenFromStorage();
      const user = await getUserFromStorage();
      if (user && token) {
        dispatch(setInitalStateLogin({ user, token }));
        goHome();
      } else {
        setIsVisible(true);
      }
    };
    getCredentials();
  }, []);

  const initialAnitmation = {
    opacity: 0,
  };

  const animationIcon = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 500,
    },
  };

  const animationButtons = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1500,
    },
  };
  return (
    <SafeAreaView style={safeareaStyle.container}>
      <View style={styles.header__container}>
        <PresenceTransition
          visible={isVisible}
          initial={initialAnitmation}
          animate={animationIcon}
        >
          <Image
            style={styles.header__image}
            source={require("../../../assets/icon.png")}
          />
        </PresenceTransition>
      </View>
      <View style={styles.body__container}>
        <PresenceTransition
          visible={isVisible}
          initial={initialAnitmation}
          animate={animationButtons}
        >
          <Text style={textStyle.title__text}>Bienvenido</Text>
          <View style={styles.login__container}>
            <TouchableOpacity
              style={primaryButtonStyle.container}
              onPress={() =>
                navigation.navigate("AuthStack", { screen: "Login" })
              }
            >
              <Text style={primaryButtonStyle.text}>Inicia sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AuthStack", { screen: "SignUp" })
              }
              style={primaryButtonStyle.container}
            >
              <Text style={primaryButtonStyle.text}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </PresenceTransition>
        <View style={styles.contact__container}>
          <TouchableOpacity>
            <Text style={textStyle.help__text}>Contactenos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wellcome;
