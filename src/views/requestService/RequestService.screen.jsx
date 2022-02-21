import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setRequestService } from "../../store/requestService/requestservice.slice.js";

import styles from "./requestservice.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const RequestServiceForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { origin, destiny, date, paymentMethod, detail } = useSelector(
    (state) => state.requestService
  );
  return (
    <SafeAreaView style={safeareaStyle.container__light}>
      <View style={headerStyle.container}>
        <TouchableOpacity>
          <FontAwesome name="close" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>Dirección</Text>
      </View>
      <View style={styles.body__container}>
        <KeyboardAvoidingView
          behavior="height"
          style={styles.keyboardavoidingview__container}
        >
          <ScrollView>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Origen</Text>
              <TouchableOpacity
                style={styles.input__form__button}
                onPress={() =>
                  navigation.navigate("FindAddress", { origin: "addressFrom" })
                }
              >
                <Text
                  style={
                    origin
                      ? styles.input__form__text
                      : styles.input__form__text__placeholder
                  }
                >
                  {origin ? origin.name : "Dirección de origen"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Destino</Text>
              <TouchableOpacity
                style={styles.input__form__button}
                onPress={() =>
                  navigation.navigate("FindAddress", { origin: "addressTo" })
                }
              >
                <Text
                  style={
                    destiny
                      ? styles.input__form__text
                      : styles.input__form__text__placeholder
                  }
                >
                  {destiny ? destiny.name : "Dirección destino"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Fecha</Text>
              <TouchableOpacity style={styles.input__form__button}>
                <Text style={styles.input__form__text__placeholder}>
                  Fecha del envío
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Método de pago</Text>
              <TouchableOpacity style={styles.input__form__button}>
                <Text style={styles.input__form__text__placeholder}>
                  Método de pago
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Detalle del envío</Text>
              <TextInput
                placeholderTextColor={"rgba(39,108,145,0.5)"}
                multiline={true}
                style={styles.input__area__form}
                placeholder="Detalle del envío"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.action__container}>
          <TouchableOpacity style={primaryButtonStyle.container}>
            <Text style={primaryButtonStyle.text__center}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestServiceForm;
