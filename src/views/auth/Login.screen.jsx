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
import { FontAwesome } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { registerIndieID } from "native-notify";

import { notifyId, notifyToken } from "../../../config.js";
import {
  setUserToStorage,
  setTokenToStorage,
} from "../../utils/asyncStorage/manageAsyncStorage.js";
import {
  resetUserMethodsMessage,
  selectGetAccesTokenState,
  getAccesToken,
  selectUser,
  selectToken,
  setIsAuth,
} from "../../store/user/user.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { handleSignIn } from "../../utils/firebase/auth.js";

import styles from "./login.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import textStyle from "../../styles/text.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, message, status } = useSelector(selectGetAccesTokenState);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState("error");
  const [feedbackMessage, setFeedbackMessage] = useState(message);

  /**
   * resetNavigation to home
   */

  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "ProtectedStack",
            params: {
              screen: "TabNavigator",
              params: {
                screen: "Home",
              },
            },
          },
        ],
      })
    );
  };

  useEffect(() => {
    const provideUserStorage = async () => await setUserToStorage(user);
    const provideTokenStorage = async () => await setTokenToStorage(token);
    if (status === "OK") {
      registerIndieID(user._id, notifyId, notifyToken);
      setFeedbackType("sucees");
      setFeedbackOpen(true);
      setFeedbackMessage(message);
      provideUserStorage();
      provideTokenStorage();
      setTimeout(() => {
        dispatch(resetUserMethodsMessage("getAccesTokenState"));
        dispatch(setIsAuth());
        goHome();
      }, 2500);
    }
    return () => {};
  }, [dispatch, status]);

  useEffect(() => {
    if (feedbackOpen) {
      setTimeout(() => {
        setFeedbackOpen(false);
      }, 1000);
    }
  }, [feedbackOpen]);

  const onSubmit = async (data) => {
    const res = await handleSignIn(data.email, data.password);
    if (res.user) {
      dispatch(getAccesToken({ email: data.email }));
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
        <Text style={textStyle.header__text}>Inicia sesión</Text>
      </View>
      <View style={styles.body__container}>
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
            <Text style={primaryButtonStyle.text__center}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default Login;
