import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./shipmentcard.style.js";
import cars from "../../styles/cars.styles.js";

const ShipmentCard = (props) => {
  const { date, price, vehicleType } = props;

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
        <View style={styles.ship__icon}>
          <Image
            style={cars[vehicleType].style}
            source={cars[vehicleType].icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShipmentCard;
