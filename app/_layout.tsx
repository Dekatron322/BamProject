import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import "react-native-reanimated";

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    LufgaMedium: require("@/assets/fonts/LufgaMedium.ttf"),
    LufgaRegular: require("@/assets/fonts/LufgaRegular.ttf"),
    GilroyRegular: require("@/assets/fonts/Gilroy-Regular.ttf"),
    GilroyMedium: require("@/assets/fonts/Gilroy-Medium.ttf"),
    GilroyBold: require("@/assets/fonts/Gilroy-Bold.ttf"),
    GilroySemiBold: require("@/assets/fonts/Gilroy-SemiBold.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />

          <Stack.Screen name="(routes)/login/index" />
          <Stack.Screen name="(routes)/signup/index" />
          <Stack.Screen name="(routes)/verifyAccount/index" />
          <Stack.Screen name="(routes)/welcome/index" />
          <Stack.Screen name="(routes)/owner/index" />
          <Stack.Screen name="(routes)/rent/index" />
          <Stack.Screen name="(routes)/setup/index" />
          <Stack.Screen name="(routes)/forgotSuccess/index" />
          <Stack.Screen name="(routes)/forgotPassword/index" />
          <Stack.Screen name="(routes)/disclaimer/index" />
          <Stack.Screen name="(routes)/notifications/index" />
          <Stack.Screen name="(routes)/categories/index" />
          <Stack.Screen name="(routes)/rents/index" />
          <Stack.Screen name="(routes)/success/index" />
          <Stack.Screen name="(routes)/details/index" />
          <Stack.Screen name="(routes)/reciept/index" />
          <Stack.Screen name="(routes)/service/index" />
          <Stack.Screen name="(routes)/serviceSuccess/index" />
          <Stack.Screen name="(routes)/serviceReciept/index" />
          <Stack.Screen name="(routes)/power/index" />
          <Stack.Screen name="(routes)/powerSuccess/index" />
          <Stack.Screen name="(routes)/powerReciept/index" />
          <Stack.Screen name="(routes)/water/index" />
          <Stack.Screen name="(routes)/waterSuccess/index" />
          <Stack.Screen name="(routes)/waterDetail/index" />
          <Stack.Screen name="(routes)/maintenance/index" />
          <Stack.Screen name="(routes)/maintenanceSuccess/index" />
          <Stack.Screen name="(routes)/maintenanceReciept/index" />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
