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

import { useDispatch, useSelector } from "react-redux";
import { setOrigin, setDestiny } from "../../store/service/service.slice.js";
import { selecAddresses } from "../../store/user/user.slice.js";

import styles from "./findadress.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import textStyle from "../../styles/text.styles.js";

const FindAddress = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const addresses = useSelector(selecAddresses);
  const screenOrigin = route.params.origin;
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
      if (screenOrigin === "addressFrom") dispatch(setOrigin(address));
      if (screenOrigin === "addressTo") dispatch(setDestiny(address));
      navigation.goBack();
    } else {
      setAddress(null);
    }
  }, [isValid]);

  return (
    <SafeAreaView style={safeareaStyle.container}>
      <View style={styles.header__container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="close" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>Dirección</Text>
      </View>
      <View style={styles.finder__container}>
        <PlaceFinder setPlace={setAddress} />
      </View>
      <View style={styles.addresses__container}>
        {addresses.length ? (
          <>
            <Text style={textStyle.title__text__dark}>Mis direcciones</Text>
            <ScrollView style={styles.addresses__scroll}>
              {addresses.map((address) => (
                <AddressCard
                  address={address}
                  key={address._id}
                  selectAddress={setAddress}
                  theme="dark"
                />
              ))}
            </ScrollView>
          </>
        ) : (
          <TouchableOpacity style={styles.add__address__button}>
            <Text style={styles.add__address__text}>
              Agrega una dirección paran comenzar a realizar tus envíos
            </Text>
          </TouchableOpacity>
        )}
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
