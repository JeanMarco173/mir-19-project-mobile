import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actionsheet } from "native-base";

import styles from "./alertdialog.style.js";

const AlertDialog = (props) => {
  const { isOpen, onClose, setResult, title, body, message } = props;

  const handlerClose = () => {
    setResult(false);
    onClose();
  };

  const handlerAcept = () => {
    setResult(true);
    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={handlerClose} hideDragIndicator>
      <Actionsheet.Content>
        <View style={styles.header__container}>
          <Text style={styles.title__header}>{title}</Text>
          <TouchableOpacity onPress={handlerClose}>
            <Text style={styles.cancel__text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body__container}>
          {body ? body : <Text style={styles.body__text}>{message}</Text>}
        </View>
        <View style={styles.action__container}>
          <TouchableOpacity onPress={handlerAcept}>
            <Text style={styles.action__text}>ACEPTAR</Text>
          </TouchableOpacity>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default AlertDialog;
