import React, { useEffect, useState } from "react";
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
import { useDisclose } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setDate,
  setHour,
  setDetail,
} from "../../store/requestService/requestservice.slice.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import AlertDialog from "../../components/alertDialog/AlertDialog.jsx";
import moment from "moment";
import { CommonActions } from "@react-navigation/native";

import styles from "./requestservice.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const RequestServiceForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { origin, destiny, date, hour, detail } = useSelector(
    (state) => state.requestService
  );
  const { isOpen, onOpen, onClose } = useDisclose();
  const [datePicker, setDatePicker] = useState(new Date());
  const [hourPicker, setHourPicker] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDateValid, setIsDateValid] = useState(null);
  const [isHourValid, setIsHourValid] = useState(null);
  const [pickerType, setPickerType] = useState("date");

  /**
   * Set date to request
   */

  const selectDate = (event, selectedDate) => {
    const currentDate = selectedDate || datePicker;
    setDatePicker(currentDate);
    setShow(false);
  };

  useEffect(() => {
    dispatch(setDate(moment(datePicker).format("YYYY-MM-DD")));
  }, [datePicker]);

  /**
   * Set hour to request
   */

  const selectHour = (event, selectedDate) => {
    const currentDate = selectedDate || hourPicker;
    setHourPicker(currentDate);
    setShow(false);
  };

  useEffect(() => {
    dispatch(setHour(moment(hourPicker).format("HH:mm")));
  }, [hourPicker]);

  /**
   * requestService
   */

  const goToResume = () => {
    if (origin && destiny && date && hour && detail) {
      navigation.navigate("SelectDriver");
    } else {
      console.log("cuidado marico, no esta en orden");
    }
  };

  /**
   * resetNavigation to home
   */

  const goBack = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );

  return (
    <SafeAreaView style={safeareaStyle.container__light}>
      <View style={headerStyle.container}>
        <TouchableOpacity onPress={goBack}>
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
              <TouchableOpacity
                style={styles.input__form__button}
                onPress={() => {
                  setPickerType("date");
                  Platform.OS === "ios" ? onOpen() : setShow(true);
                }}
              >
                <Text
                  style={
                    date
                      ? styles.input__form__text
                      : styles.input__form__text__placeholder
                  }
                >
                  {date ? date : "Fecha del envío"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input__form__container}>
              <Text style={textStyle.label__title}>Hora</Text>
              <TouchableOpacity
                style={styles.input__form__button}
                onPress={() => {
                  setPickerType("time");
                  Platform.OS === "ios" ? onOpen() : setShow(true);
                }}
              >
                <Text
                  style={
                    hour
                      ? styles.input__form__text
                      : styles.input__form__text__placeholder
                  }
                >
                  {hour ? hour : "Hora"}
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
                value={detail}
                onChangeText={(text) => dispatch(setDetail(text))}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.action__container}>
          <TouchableOpacity
            style={primaryButtonStyle.container}
            onPress={goToResume}
          >
            <Text style={primaryButtonStyle.text__center}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Platform.OS === "ios" ? (
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
          setResult={pickerType === "date" ? setIsDateValid : setIsHourValid}
          title="Seleccione una fecha"
          body={
            <DateTimePicker
              testID="dateTimePicker"
              value={pickerType === "date" ? datePicker : hourPicker}
              mode={pickerType}
              is24Hour={true}
              display="spinner"
              onChange={pickerType === "date" ? selectDate : selectHour}
            />
          }
        />
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={pickerType === "date" ? datePicker : hourPicker}
            mode={pickerType}
            is24Hour={true}
            display="spinner"
            onChange={pickerType === "date" ? selectDate : selectHour}
          />
        )
      )}
    </SafeAreaView>
  );
};

export default RequestServiceForm;
