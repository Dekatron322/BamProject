import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboarding";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const handleSignIn = () => {
  router.push("/(tabs)/home");
};
export default function Login() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpiner] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSignIn = () => {
    setButtonSpiner(true);

    setTimeout(() => {
      setButtonSpiner(false);
      router.push("/(tabs)/home");
    }, 3000);
  };

  return (
    <LinearGradient
      colors={["#ffffff", "#ffffff", "#ffffff"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ paddingHorizontal: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer size={16} />
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} />
          </TouchableOpacity>
          <Spacer size={40} />
          <View style={styles.screenContent}>
            <Image
              source={require("@/assets/images/signin.png")}
              style={styles.slideImage}
            />
            <Image
              source={require("@/assets/images/account_circle.png")}
              style={styles.slideImage}
            />
            <Spacer size={20} />

            <View
              style={[
                styles.TextInput,
                focusedInput === "property_id" && {
                  borderColor: "#004680",
                  borderWidth: 2,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={styles.TextInputTitle}>Property ID</Text>
                  <TextInput
                    maxLength={25}
                    placeholder="ADM-0001"
                    placeholderTextColor="#212121"
                    style={{ padding: 0, marginTop: 3, fontSize: 16 }}
                    onFocus={() => setFocusedInput("property_id")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </View>
              </View>
            </View>
            <Spacer size={16} />
            <View
              style={[
                styles.TextInput,
                focusedInput === "password" && {
                  borderColor: "#004680",
                  borderWidth: 2,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={styles.TextInputTitle}>Password</Text>
                  <TextInput
                    maxLength={25}
                    placeholder="***********"
                    placeholderTextColor="#212121"
                    style={{ padding: 0, marginTop: 3, fontSize: 16 }}
                    secureTextEntry={!passwordVisible}
                    onChangeText={setPassword}
                    value={password}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <Feather name="eye" size={20} color={"#333333"} />
                  ) : (
                    <Image
                      source={require("@/assets/images/eye-close-line.png")}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <Spacer size={8} />

            <TouchableOpacity
              onPress={() => router.push("/(routes)/forgotPassword")}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Manrope_400Regular",
                  textDecorationLine: "underline",
                  color: "#004680",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <Spacer size={16} />
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={handleSignIn}>
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnContent}>Continue</Text>
            )}
          </TouchableOpacity>
          <Spacer size={20} />
          <View style={styles.footerContainer}>
            <Text
              style={{ fontFamily: "Manrope_400Regular", color: "#A8A8A8" }}
            >
              Are you having Trouble signing in?{" "}
              <Text
                onPress={() => router.push("/(routes)/disclaimer")}
                style={styles.action}
              >
                Help
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
