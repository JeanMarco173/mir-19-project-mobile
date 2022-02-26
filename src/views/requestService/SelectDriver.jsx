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
  selectDrivers,
  selectService,
  selectSetDriverState,
  setDriver,
} from "../../store/service/service.slice.js";
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
  const service = useSelector(selectService);
  const drivers = useSelector(selectDrivers);
  const origin = service.origin;
  const destiny = service.destiny;
  const mapRef = useRef();

  const [route, setRoute] = useState([]);

  const markerOrigin = {
    latitude: origin.coordinates.lat,
    longitude: origin.coordinates.lng,
  };

  const markerDestiny = {
    latitude: destiny.coordinates.lat,
    longitude: destiny.coordinates.lng,
  };

  useEffect(() => {
    const setPointsOfRoute = async () => {
      const from = `${origin.coordinates.lat},${origin.coordinates.lng}`;
      const to = `${destiny.coordinates.lat},${destiny.coordinates.lng}`;
      const res = await getRoute(from, to);
      const routeAux = [markerOrigin];
      const pointsAux = res[0].legs[0].steps.map((item) => ({
        latitude: item.end_location.lat,
        longitude: item.end_location.lng,
      }));
      setRoute(routeAux.concat(pointsAux));
    };
    if (origin && destiny) {
      setPointsOfRoute();
      mapRef.current.fitToSuppliedMarkers(["1", "2"], {
        edgePadding: { top: 100, right: 20, bottom: 100, left: 20 },
      });
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
            {drivers.length &&
              drivers.map((driver) => (
                <TouchableOpacity
                  style={styles.driver__button}
                  key={driver._id}
                >
                  <View style={styles.driver__icon__container}>
                    <Image
                      style={cars[driver.carDetail[0].type].style}
                      source={cars[driver.carDetail[0].type].icon}
                    />
                  </View>
                  <View style={styles.driver__text__container}>
                    <Text style={styles.driver__text} numberOfLines={1}>
                      {driver.carDetail[0].type}
                    </Text>
                  </View>
                  <View style={styles.price__text__container}>
                    <Text style={styles.price__text} numberOfLines={1}>
                      S/ {driver.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
        <View style={styles.action__container}>
          <TouchableOpacity style={primaryButtonStyle.container}>
            <Text style={primaryButtonStyle.text__center}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectDriver;
