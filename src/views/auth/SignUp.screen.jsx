import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./signup.style";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import textStyle from "../../styles/text.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";

const SignUp = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      surName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    /*  console.log("Hola");
    console.log(data); */
  };

  return (
    <SafeAreaView style={safeareaStyle.container__light}>
      <View style={headerStyle.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="close" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>Registrate</Text>
      </View>
      <View style={styles.body__container}>
        <View style={styles.input__form__container}>
          <Text style={textStyle.sub__title}>Nombres</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Ingrese su nombre"
                autoCapitalize="words"
                placeholderTextColor={"rgba(39,108,145,0.5)"}
              />
            )}
            name="firstName"
            rules={{ required: true, minLength: 3 }}
          />
          {errors.firstName && (
            <Text style={textStyle.error__text}>Campo obligatorio.</Text>
          )}
        </View>
        <View style={styles.input__form__container}>
          <Text style={textStyle.sub__title}>Apellidos</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Ingrese sus apellidos"
                autoCapitalize="words"
                placeholderTextColor={"rgba(39,108,145,0.5)"}
              />
            )}
            name="surName"
            rules={{ required: true }}
          />
          {errors.surName && (
            <Text style={textStyle.error__text}>Campo obligatorio.</Text>
          )}
        </View>
        <View style={styles.input__form__container}>
          <Text style={textStyle.sub__title}>Email</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Ingrese su email"
                keyboardType="email-address"
                placeholderTextColor={"rgba(39,108,145,0.5)"}
              />
            )}
            name="email"
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          {errors.email && (
            <Text style={textStyle.error__text}>Campo obligatorio.</Text>
          )}
        </View>
        <View style={styles.input__form__container}>
          <Text style={textStyle.sub__title}>Contraseña</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Ingrese su contraseña"
                secureTextEntry={true}
                placeholderTextColor={"rgba(39,108,145,0.5)"}
              />
            )}
            name="password"
            rules={{ required: true, maxLength: 16, minLength: 6 }}
          />
          {errors.password && (
            <Text style={textStyle.error__text}>Campo obligatorio.</Text>
          )}
        </View>
        <View style={styles.action__container}>
          <TouchableOpacity
            style={primaryButtonStyle.container}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={primaryButtonStyle.text__center}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
