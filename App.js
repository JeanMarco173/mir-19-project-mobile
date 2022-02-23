import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./src/views/auth/SignUp.screen.jsx";
import Wellcome from "./src/views/wellcome/Wellcome.screen.jsx";
import Home from "./src/views/home/Home.screen.jsx";
import FindAddress from "./src/views/findAddress/FindAdress.screen.jsx";
import RequestServiceForm from "./src/views/requestService/RequestService.screen.jsx";
import SelectDriver from "./src/views/requestService/SelectDriver.jsx";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
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
        name="FindAddress"
        component={FindAddress}
        options={{ headerShown: false }}
        initialParams={{ origin: "" }}
      />
    </Stack.Navigator>
  );
}

function App() {
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
              name="AuthStack"
              component={AuthStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestServiceStack"
              component={RequestServiceStack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
