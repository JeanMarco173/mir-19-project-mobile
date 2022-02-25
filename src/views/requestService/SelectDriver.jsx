import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setDate,
  setHour,
  setDetail,
} from "../../store/requestService/requestservice.slice.js";
import { FontAwesome } from "@expo/vector-icons";
import { getRoute } from "../../api/googleAPI.js";

import styles from "./selectdrive.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";
import cars from "../../styles/cars.styles.js";
import mapStyle from "../../styles/map.style.js";

const SelectDriver = ({ navigation }) => {
  const { origin, destiny } = useSelector((state) => state.requestService);
  const mapRef = useRef();

  const [route, setRoute] = useState([]);

  const markerOrigin = {
    latitude: origin.location.lat,
    longitude: origin.location.lng,
  };

  const markerDestiny = {
    latitude: destiny.location.lat,
    longitude: destiny.location.lng,
  };

  useEffect(() => {
    const setPointsOfRoute = async () => {
      const from = `${origin.location.lat},${origin.location.lng}`;
      const to = `${destiny.location.lat},${destiny.location.lng}`;
      const res = await getRoute(from, to);
      const pointAux = [markerOrigin];
      res[0].legs[0].steps.forEach((item) =>
        pointAux.push({
          latitude: item.end_location.lat,
          longitude: item.end_location.lng,
        })
      );
      setRoute(pointAux);
    };
    if (origin && destiny) {
      mapRef.current.fitToSuppliedMarkers(["1", "2"], {
        edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
      });
      setPointsOfRoute();
    }
  }, []);

  return (
    <SafeAreaView style={safeareaStyle.container__light}>
      <View style={headerStyle.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text}>Dirección</Text>
      </View>
      <View style={styles.map__container}>
        <MapView style={styles.map} ref={mapRef} customMapStyle={mapStyle}>
          {origin && destiny && (
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
              {route.length > 0 ? (
                <Polyline
                  coordinates={route}
                  strokeColor="#254A5A"
                  strokeWidth={4}
                />
              ) : null}
            </>
          )}
        </MapView>
      </View>
      <View style={styles.content__container}>
        <View style={styles.drivers__container}>
          <ScrollView>
            <TouchableOpacity style={styles.driver__button}>
              <View style={styles.driver__icon__container}>
                <Image style={cars[0].style} source={cars[0].icon} />
              </View>
              <View style={styles.driver__text__container}>
                <Text style={styles.driver__text} numberOfLines={1}>
                  Van
                </Text>
              </View>
              <View style={styles.price__text__container}>
                <Text style={styles.price__text} numberOfLines={1}>
                  S/ 10.00
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.action__container}>
          <TouchableOpacity style={primaryButtonStyle.container}>
            <Text style={primaryButtonStyle.text__center}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectDriver;
