import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from "react-native";
import HomeScreen from "@/screens/HomeScreen/HomeScreen";
import SettingsScreen from "@/screens/SettingScreen/SettingScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import TransactionScreen from "@/screens/TransactionScreen/TransactionScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 13,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#044982",
        tabBarInactiveTintColor: "#A8A8A8",
        tabBarIcon: ({ color, focused }) => {
          let imageSource;

          switch (route.name) {
            case "(routes)/home/index":
              imageSource = focused
                ? require("@/assets/images/Icon-active.png")
                : require("@/assets/images/HomeOutline.png");
              break;
            case "(routes)/history/index":
              imageSource = focused
                ? require("@/assets/images/TimeActive.png")
                : require("@/assets/images/TimeCircle.png");
              break;
            case "(routes)/profile/index":
              imageSource = focused
                ? require("@/assets/images/ProfileActive.png")
                : require("@/assets/images/Outline.png");
              break;

            default:
              return null;
          }

          return (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              <Image
                source={imageSource}
                style={[
                  { width: 30, height: 30 },
                  focused && styles.activeImage,
                ]}
                resizeMode="contain"
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="(routes)/home/index"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="(routes)/history/index"
        component={TransactionScreen}
        options={{
          tabBarLabel: "History",
        }}
      />

      <Tab.Screen
        name="(routes)/profile/index"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 30, // Rounded corners for both active and inactive
  },
  activeTab: {
    backgroundColor: "#ffffff", // Background color for active tab
    height: 65, // Increase height for the active tab
    width: 65, // Optional: Make the active tab a bit wider
    borderRadius: 75, // Ensure the active tab stays circular
    marginBottom: 20, // Push the active tab slightly above others
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4, // Drop shadow for active tab
  },
  activeImage: {
    width: 44, // Adjust width for active image
    height: 44, // Adjust height for active image
    marginBottom: 10,
  },
});
