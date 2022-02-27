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
import { FontAwesome } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import Loading from "../../components/loading/Loading.jsx";

import { useDispatch, useSelector } from "react-redux";
import {
  resetServiceMethodsMessage,
  selectDrivers,
  selectService,
  selectSetDriverState,
  setDriver,
} from "../../store/service/service.slice.js";
import { getRoute } from "../../api/googleAPI.js";

import styles from "./selectdrive.style.js";
import safeareaStyle from "../../styles/safearea.style.js";
import headerStyle from "../../styles/header.styles.js";
import { primaryButtonStyle } from "../../styles/buttons.styles.js";
import textStyle from "../../styles/text.styles.js";
import cars from "../../styles/cars.styles.js";
import mapStyle from "../../styles/map.style.js";

const SelectDriver = ({ navigation }) => {
  const dispatch = useDispatch();
  const service = useSelector(selectService);
  const drivers = useSelector(selectDrivers);
  const { loading, message, status } = useSelector(selectSetDriverState);

  const origin = service.origin;
  const destiny = service.destiny;
  const mapRef = useRef();

  const [route, setRoute] = useState([]);
  const [driverSelected, setDriverSelected] = useState({ _id: 0 });

  const markerOrigin = {
    latitude: origin.coordinates.lat,
    longitude: origin.coordinates.lng,
  };

  const markerDestiny = {
    latitude: destiny.coordinates.lat,
    longitude: destiny.coordinates.lng,
  };

  /**
   * resetNavigation to Service
   */

  const goToService = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "RequestServiceStack",
            params: {
              screen: "ServiceInProcess",
            },
          },
        ],
      })
    );

  useEffect(() => {
    if (status === "OK") {
      dispatch(resetServiceMethodsMessage("setDriverState"));
      goToService();
    }
  }, [status]);

  const requestDriver = async () => {
    if (driverSelected._id) {
      dispatch(
        setDriver({
          serviceId: service._id,
          body: {
            driver: driverSelected._id,
            price: driverSelected.price,
          },
        })
      );
    } else {
      console.log("Selecciona un chamo");
    }
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
        <TouchableOpacity
          style={{ marginRight: "15%" }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Text style={textStyle.header__text__left}>Seleccione un driver</Text>
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
              {route.length ? (
                <Polyline
                  coordinates={route}
                  strokeColor="#254A5A"
                  strokeWidth={4}
                />
              ) : null}
            </>
          ) : null}
        </MapView>
      </View>
      <View style={styles.content__container}>
        <View style={styles.drivers__container}>
          <ScrollView>
            {drivers.length
              ? drivers.map((driver) => (
                  <TouchableOpacity
                    style={
                      driver._id == driverSelected._id
                        ? styles.driver__button__selected
                        : styles.driver__button
                    }
                    key={driver._id}
                    onPress={() => setDriverSelected(driver)}
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
                ))
              : null}
          </ScrollView>
        </View>
        <View style={styles.action__container}>
          <TouchableOpacity
            style={primaryButtonStyle.container}
            onPress={requestDriver}
          >
            <Text style={primaryButtonStyle.text__center}>Seleccionar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default SelectDriver;
