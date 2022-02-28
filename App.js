import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";

import { notifyId, notifyToken } from "./config.js";
import { useSelector } from "react-redux";
import { selecIsAuth } from "./src/store/user/user.slice.js";

import SignUp from "./src/views/auth/SignUp.screen.jsx";
import Login from "./src/views/auth/Login.screen.jsx";
import Wellcome from "./src/views/wellcome/Wellcome.screen.jsx";
import FindAddress from "./src/views/findAddress/FindAdress.screen.jsx";
import RequestServiceForm from "./src/views/requestService/RequestService.screen.jsx";
import SelectDriver from "./src/views/requestService/SelectDriver.jsx";
import ServiceInProcess from "./src/views/service/Service.screen.jsx";

import TabNavigator from "./src/navigation/tab.navigation.js";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function RequestServiceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RequestServiceForm"
        component={RequestServiceForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectDriver"
        component={SelectDriver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceInProcess"
        component={ServiceInProcess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FindAddress"
        component={FindAddress}
        options={{ headerShown: false }}
        initialParams={{ origin: "" }}
      />
    </Stack.Navigator>
  );
}

function ProtectedStack() {
  const isAuth = useSelector(selecIsAuth);
  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RequestServiceStack"
            component={RequestServiceStack}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

function App() {
  registerNNPushToken(notifyId, notifyToken);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Wellcome"
              component={Wellcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProtectedStack"
              component={ProtectedStack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
