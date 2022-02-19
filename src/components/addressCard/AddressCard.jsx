import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./addresscard.style.js";

const AddressCard = (props) => {
  const { addressName } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{addressName}</Text>
    </TouchableOpacity>
  );
};

export default AddressCard;
