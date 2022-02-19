import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { PresenceTransition, NativeBaseProvider } from "native-base";

import styles from "./wellcome.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const Wellcome = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
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
    <SafeAreaView style={safeareaStyle.android__safearea}>
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
          <Text style={textStyle.title__text}>Iniciar sesión</Text>
          <View style={styles.login__container}>
            <TouchableOpacity style={primaryButtonStyle.container}>
              <Text style={primaryButtonStyle.text}>Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={primaryButtonStyle.container}
            >
              <Text style={primaryButtonStyle.text}>Facebook</Text>
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
