import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Wellcome from "./src/views/wellcome/Wellcome.screen.jsx";
import Home from "./src/views/home/Home.screen.jsx";
import FindAddress from "./src/views/findAddress/FindAdress.screen.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="FindAddress"
              component={FindAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
