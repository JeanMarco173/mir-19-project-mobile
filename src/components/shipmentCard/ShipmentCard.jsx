import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./shipmentcard.style.js";
const vehiclesImageArray = [
  { type: "van", uri: require("../../../assets/van.png") },
  { type: "smallTruck", uri: require("../../../assets/small-truck.png") },
  { type: "middleTruck", uri: require("../../../assets/middle-truck.png") },
  { type: "bigTruck", uri: require("../../../assets/big-truck.png") },
];

const ShipmentCard = (props) => {
  const { date, price, vehicleType } = props;

  const vehicle = vehiclesImageArray.filter(
    (item) => item.type === vehicleType
  );

  return (
    <TouchableOpacity style={styles.ship__container}>
      <View style={styles.ship__detail__container}>
        <Text style={styles.ship__detail__title}>Mi último envío</Text>
        <View style={styles.ship__detail}>
          <Text style={styles.detail__text__label}>Fecha:</Text>
          <Text style={styles.detail__text}>{date}</Text>
        </View>
        <View style={styles.ship__detail}>
          <Text style={styles.detail__text__label}>Precio:</Text>
          <Text style={styles.detail__text}>S/. {price}</Text>
        </View>
      </View>
      <View style={styles.ship__icon__container}>
        <Image style={styles.ship__icon} source={vehicle.uri} />
      </View>
    </TouchableOpacity>
  );
};

export default ShipmentCard;
