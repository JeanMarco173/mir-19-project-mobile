import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Home from "../views/home/Home.screen.jsx";
import MoreOptions from "../views/moreOptions/MoreOptions.screen.jsx";
import MyAddresses from "../views/myAdrresses/MyAddresses.screen.jsx";
import Inbox from "../views/chat/Inbox.screen.jsx";
import MyShipments from "../views/myShipments/MyShipments.screen.jsx";

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "box";
              break;
            case "Más":
              iconName = "cog";
              break;
            case "Direcciones":
              iconName = "address";
              break;
            case "Envíos":
              iconName = "text-document";
              break;
            case "Chats":
              iconName = "chat";
              break;
          }
          return <Entypo name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#060525",
        tabBarInactiveTintColor: "#B5BFC2",
      })}
    >
      <Tab.Screen
        name="Direcciones"
        component={MyAddresses}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Envíos"
        component={MyShipments}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chats"
        component={Inbox}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Más"
        component={MoreOptions}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;

/**
 * address
 * box
 * chat
 * cog
 * text-document
 */
