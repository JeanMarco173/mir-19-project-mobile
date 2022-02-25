import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ShipCard from "../../components/shipmentCard/ShipmentCard.jsx";
import AddressCard from "../../components/addressCard/AddressCard.jsx";

import styles from "./home.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const Home = ({ navigation }) => {
  const [addresses, setAddresses] = useState([]);

  const goToRequestService = () => navigation.navigate("RequestServiceStack");
  return (
    <SafeAreaView style={safeareaStyle.container}>
      <View style={styles.main__container}>
        <TouchableOpacity
          style={styles.move__house__button}
          onPress={goToRequestService}
        >
          <View style={styles.move__house__icon__container}>
            <Image
              style={styles.move__house__icon}
              source={require("../../../assets/icon.png")}
            />
          </View>
          <View style={styles.move__house__text__container}>
            <Text style={styles.move__house__text}>
              ¿Necesitas trasladar algo?
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.ship__container}>
          <ShipCard date="22/02/2022" price="22.00" vehicleType="van" />
        </View>
        <View style={styles.request__ship__container}>
          <TouchableOpacity
            style={primaryButtonStyle.container}
            onPress={goToRequestService}
          >
            <Text style={primaryButtonStyle.text__center}>
              Cotiza un traslado
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.addresses__container}>
        {addresses.length ? (
          <>
            <Text style={textStyle.title__text}>Mis direcciones</Text>
            <ScrollView style={styles.addresses__container}>
              <AddressCard addressName="Dirección 1" />
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
    </SafeAreaView>
  );
};

export default Home;
