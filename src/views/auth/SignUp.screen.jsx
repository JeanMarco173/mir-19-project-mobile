import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Loading from "../../components/loading/Loading.jsx";
import FeedbackMessage from "../../components/feedback/FeedbackMessage.jsx";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { handleSignUp } from "../../utils/firebase/auth.js";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserMethodsMessage,
  selectSignUpState,
  signUp,
} from "../../store/user/user.slice.js";

import styles from "./signup.style";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import textStyle from "../../styles/text.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, message, status } = useSelector(selectSignUpState);
  const {
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
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState("error");
  const [feedbackMessage, setFeedbackMessage] = useState(message);

  useEffect(() => {
    if (status === "OK") {
      setFeedbackType("sucees");
      setFeedbackOpen(true);
      setFeedbackMessage(message);
      setTimeout(() => {
        dispatch(resetUserMethodsMessage("signUpState"));
        navigation.navigate("Login");
      }, 3500);
    }
  }, [dispatch, status]);

  useEffect(() => {
    setTimeout(() => {
      setFeedbackOpen(false);
    }, 2000);
  }, [feedbackOpen]);

  const onSubmit = async (data) => {
    const res = await handleSignUp(data.email, data.password);
    if (res.user) {
      dispatch(signUp(data));
    } else {
      setFeedbackMessage(res.error.message);
      setFeedbackOpen(true);
    }
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
            name="name"
            rules={{
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 3,
                message: "Ingrese un nombre válido",
              },
            }}
          />
          {errors.firstName && (
            <Text style={textStyle.error__text}>
              {errors.firstName.message}
            </Text>
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
            rules={{
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 6,
                message: "Ingrese un apellido válido",
              },
            }}
          />
          {errors.surName && (
            <Text style={textStyle.error__text}>{errors.surName.message}</Text>
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
            rules={{
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Ingrese un email válido",
              },
            }}
          />
          {errors.email && (
            <Text style={textStyle.error__text}>{errors.email.message}</Text>
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
            rules={{
              required: { value: true, message: "Campo obligatorio" },
              maxLength: {
                value: 16,
                message: "La contraseña debe tener 16 caracteres como máximo",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener 16 caracteres como minimo",
              },
            }}
          />
          {errors.password && (
            <Text style={textStyle.error__text}>{errors.password.message}</Text>
          )}
        </View>
        <FeedbackMessage
          type={feedbackType}
          message={feedbackMessage}
          isOpen={feedbackOpen}
        />
        <View style={styles.action__container}>
          <TouchableOpacity
            style={primaryButtonStyle.container}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={primaryButtonStyle.text__center}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default SignUp;
