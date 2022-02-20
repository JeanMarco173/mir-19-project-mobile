import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./addresscard.style.js";

const AddressCard = (props) => {
  const { origin, theme, address, selectAddress, selectPlace } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        origin === "Finder" ? selectPlace(address) : selectAddress(address);
      }}
      style={theme ? styles.container__dark : styles.container}
    >
      <Text style={theme ? styles.text__dark : styles.text} numberOfLines={1}>
        {origin === "Finder" ? address.description : address.name}
      </Text>
    </TouchableOpacity>
  );
};

export default AddressCard;
