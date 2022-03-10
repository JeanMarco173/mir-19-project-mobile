import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import moment from "moment";

import { uploadFile } from "../../utils/firebase/upload.js";
import { useDispatch, useSelector } from "react-redux";
import { clearStorage } from "../../utils/asyncStorage/manageAsyncStorage.js";
import {
  resetUserMethodsMessage,
  selectUser,
  logout,
} from "../../store/user/user.slice.js";

import styles from "./moreoptions.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import textStyle from "../../styles/text.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";

const MoreOptions = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const goWellcome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Wellcome",
          },
        ],
      })
    );
  };

  const clearData = async () => {
    await clearStorage();
    dispatch(logout());
    goWellcome();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const name = moment().unix();
      const url = await uploadFile(result.uri, name);
    }
  };

  return (
    <SafeAreaView style={safeareaStyle.container}>
      <View style={headerStyle.container__logout}>
        <Text style={textStyle.header__text__left}>HouseMove</Text>
        <TouchableOpacity
          style={styles.logout__button}
          onPress={() => clearData()}
        >
          <Entypo name="log-out" size={24} color="#254A5A" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.user__container}>
          <TouchableOpacity
            style={styles.user__avatar__button}
            onPress={pickImage}
          >
            <Image
              style={styles.user__avatar__photo}
              source={
                user.avatarUrl
                  ? { uri: user.avatarUrl }
                  : require("../../../assets/icon.png")
              }
            />
          </TouchableOpacity>
          <View style={styles.user__info__container}>
            <Text
              style={styles.user__text}
            >{`${user.name} ${user.surName}`}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreOptions;
