import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDisclose } from "native-base";
import PlaceFinder from "../../components/placeFinder/PlaceFinder.jsx";
import AddressCard from "../../components/addressCard/AddressCard.jsx";
import AlertDialog from "../../components/alertDialog/AlertDialog.jsx";
import { useDispatch } from "react-redux";
import { setAddressFrom } from "../../store/addressFrom/addressfrom.slice.js";

import styles from "./findadress.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import textStyle from "../../styles/text.styles.js";

const FindAddress = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclose();

  const [address, setAddress] = useState(null);
  const [isValid, setIsValid] = useState(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (address) {
      setMessage(`La dirección que ha seleccionado es: ${address.name}`);
      onOpen();
    }
  }, [address]);

  useEffect(() => {
    if (isValid) {
      dispatch(setAddressFrom(address));
    } else {
      setAddress(null);
    }
  }, [isValid]);

  return (
    <SafeAreaView style={safeareaStyle.android__safearea}>
      <View style={styles.header__container}>
        <TouchableOpacity>
          <FontAwesome name="close" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>Dirección</Text>
      </View>
      <View style={styles.finder__container}>
        <PlaceFinder setPlace={setAddress} />
      </View>
      <View style={styles.addresses__container}>
        <Text style={textStyle.title__text__dark}>Mis direcciones</Text>
        <ScrollView style={styles.addresses__scroll}>
          <AddressCard
            address={{ name: "Direccion" }}
            selectAddress={setAddress}
            theme="dark"
          />
        </ScrollView>
      </View>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        setResult={setIsValid}
        title="Confirmar dirección"
        message={message}
      ></AlertDialog>
    </SafeAreaView>
  );
};

export default FindAddress;
