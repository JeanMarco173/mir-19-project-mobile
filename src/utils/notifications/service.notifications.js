import React, { useEffect } from "react";
import { getPushDataObject } from "native-notify";

import { setServiceFromNotification } from "../../store/service/service.slice.js";

const setUpService = (data, navigation, dispatch) => {
  dispatch(setServiceFromNotification(data));
  navigation.navigate("RequestServiceStack", { screen: "ServiceInProcess" });
};

const actionNotifications = (navigation, dispatch) => {
  let pushDataObject = getPushDataObject();
  useEffect(() => {
    if (pushDataObject.type === "service") {
      setUpService(pushDataObject.service, navigation, dispatch);
    }
  });
};

export default actionNotifications;
