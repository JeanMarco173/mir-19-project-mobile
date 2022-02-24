import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PresenceTransition } from "native-base";

import styles from "./feeedbackmessage.style.js";

const FeedbackMessage = (props) => {
  const { type, message, isOpen } = props;
  const styleTypes = {
    error: {
      container: "container__error",
      icon: "times-circle",
    },
    sucees: {
      container: "container__success",
      icon: "check-circle",
    },
    warning: {
      container: "container__warning",
      icon: "warning",
    },
  };

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

  return (
    <PresenceTransition
      visible={isOpen}
      initial={initialAnitmation}
      animate={animationIcon}
    >
      <View style={styles[styleTypes[type].container]}>
        <FontAwesome name={styleTypes[type].icon} size={24} color="#FFFFFF" />
        <Text style={styles.feedback__text}>{message}</Text>
      </View>
    </PresenceTransition>
  );
};

export default FeedbackMessage;
