import React, { useEffect } from "react";
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
import Loading from "../../components/loading/Loading.jsx";

import actionNotifications from "../../utils/notifications/service.notifications.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selecAddresses,
  selectUser,
  getAddressesByUser,
  selectGetAddressesByUserState,
  resetUserMethodsMessage,
} from "../../store/user/user.slice.js";

import styles from "./home.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const addresses = useSelector(selecAddresses);
  const user = useSelector(selectUser);
  const { loading } = useSelector(selectGetAddressesByUserState);

  actionNotifications(navigation, dispatch);

  useEffect(() => {
    const getAddresses = async () =>
      dispatch(getAddressesByUser({ customerId: user._id }));
    getAddresses();
    return () => dispatch(resetUserMethodsMessage("getAddressesByUserState"));
  }, []);

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
          <ShipCard date="22/02/2022" price="22.00" vehicleType="Van" />
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
              {addresses.map((address) => (
                <AddressCard address={address} key={address._id} />
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
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default Home;
