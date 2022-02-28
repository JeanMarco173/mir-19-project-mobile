import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

import { useSelector } from "react-redux";
import { selectService } from "../../store/service/service.slice.js";

import styles from "./service.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";
import mapStyle from "../../styles/map.style.js";

const ServiceInProcess = ({ navigation }) => {
  const service = useSelector(selectService);
  const origin = service.origin;
  const destiny = service.destiny;

  const markerOrigin = {
    latitude: origin.coordinates.lat,
    longitude: origin.coordinates.lng,
  };

  const markerDestiny = {
    latitude: destiny.coordinates.lat,
    longitude: destiny.coordinates.lng,
  };

  const mapRef = useRef();

  useEffect(() => {
    if (origin && destiny) {
      mapRef.current.fitToSuppliedMarkers(["1"], {
        edgePadding: { top: 100, right: 20, bottom: 100, left: 20 },
      });
    }
  }, []);

  /**
   * resetNavigation to home
   */

  const goBack = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "TabNavigator",
            params: {
              screen: "Home",
            },
          },
        ],
      })
    );

  return (
    <SafeAreaView style={safeareaStyle.container__light}>
      <View style={headerStyle.container}>
        <TouchableOpacity onPress={() => goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>HouseMove</Text>
      </View>
      <View style={styles.map__container}>
        <MapView style={styles.map} ref={mapRef} customMapStyle={mapStyle}>
          {origin && destiny ? (
            <>
              <Marker
                key="1"
                identifier="1"
                coordinate={markerOrigin}
                anchor={{ x: 0.5, y: 1 }}
              >
                <FontAwesome name="map-marker" size={32} color="#F2774B" />
              </Marker>
              <Marker
                key="2"
                identifier="2"
                coordinate={markerDestiny}
                anchor={{ x: 0.5, y: 1 }}
              >
                <FontAwesome name="map-marker" size={32} color="#F2774B" />
              </Marker>
            </>
          ) : null}
        </MapView>
        <View style={styles.service__status__container}>
          <Text style={styles.service__status__text}>{service.status}</Text>
        </View>
      </View>
      <View style={styles.content__container}>
        <View style={styles.driver__container}>
          <View style={styles.driver__avatar__container}>
            <Image
              source={require("../../../assets/icon.png")}
              style={styles.driver__avatar}
            />
          </View>
          <View style={styles.driver__info__container}>
            <Text
              style={styles.driver__name__text}
            >{`${service.driver.name} ${service.driver.surName}`}</Text>
            <Text
              style={styles.driver__car__text}
            >{`${service.driver.car.brand} ${service.driver.car.model} ${service.driver.car.plate}`}</Text>
            <View style={styles.driver__rating__container}>
              <FontAwesome name="star" size={24} color="#FFCC7F" />
              <FontAwesome name="star" size={24} color="#FFCC7F" />
              <FontAwesome name="star" size={24} color="#FFCC7F" />
              <FontAwesome name="star" size={24} color="#FFCC7F" />
              <FontAwesome name="star" size={24} color="#FFCC7F" />
            </View>
          </View>
        </View>
        <View style={styles.service__info__container}>
          <View style={styles.service__info}>
            <Text style={styles.service__info__text}>
              {service.distance} KM
            </Text>
          </View>
          <View style={styles.service__info}>
            <Text style={styles.service__info__text}>S/. {service.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={primaryButtonStyle.container}>
          <Text style={primaryButtonStyle.text__center}>Contactar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ServiceInProcess;
