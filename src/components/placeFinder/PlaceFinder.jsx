import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import AddressCard from "../addressCard/AddressCard.jsx";
import { findPlace, getPlaceDetail } from "../../api/googleAPI.js";

import styles from "./placefinder.style.js";
import textStyle from "../../styles/text.styles.js";

const FindAddress = (props) => {
  const { setPlace } = props;
  const [queryPlace, setQueryPlace] = useState("");
  const [places, setPlaces] = useState([]);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const findPlaceAPI = async () => {
      if (queryPlace.length > 2) {
        const response = await findPlace(queryPlace);
        if (typeof response === "object") setPlaces(response);
        else setMessageError(response);
      } else if (queryPlace.length === 0) {
        if (places.length > 0) setPlaces([]);
      }
    };
    findPlaceAPI();
    return () => {
      setQueryPlace("");
      setPlaces([]);
      setMessageError("");
    };
  }, [queryPlace]);

  const getPlace = async (place) => {
    const response = await getPlaceDetail(place.place_id);
    const address = {
      name: response.formatted_address,
      coordinates: response.geometry.location,
    };
    setPlace(address);
  };

  return (
    <View>
      <Text style={textStyle.sub__title}>Buscar dirección</Text>
      <TextInput
        style={styles.finder__input}
        placeholder="Buscar"
        onChangeText={(query) => setQueryPlace(query)}
      ></TextInput>
      <View style={styles.places__container}>
        {places.length ? (
          <ScrollView style={styles.places__scroll}>
            {places.map((item, index) => (
              <AddressCard
                origin="Finder"
                key={index}
                selectPlace={getPlace}
                address={item}
              />
            ))}
          </ScrollView>
        ) : (
          <Text>{queryPlace !== "" ? messageError : ""}</Text>
        )}
      </View>
    </View>
  );
};

export default FindAddress;
