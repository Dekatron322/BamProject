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

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [buttonSpinner, setButtonSpiner] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSignIn = () => {
    setButtonSpiner(true);

    setTimeout(() => {
      setButtonSpiner(false);
      router.push("/(routes)/setup");
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
              source={require("@/assets/images/creat_account.png")}
              style={styles.slideImage}
            />
            <Text
              style={{
                fontFamily: "Manrope_400Regular",
                color: "#000000",
                textAlign: "center",
              }}
            >
              Register with a valid credentials
            </Text>
            <Spacer size={20} />

            <View
              style={[
                styles.TextInput,
                focusedInput === "email" && {
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
                  <Text style={styles.TextInputTitle}>Email</Text>
                  <TextInput
                    maxLength={25}
                    placeholder="Shereefadamu001@gmail.com"
                    placeholderTextColor="#212121"
                    style={{ padding: 0, marginTop: 3, fontSize: 16 }}
                    onFocus={() => setFocusedInput("email")}
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

            <Spacer size={16} />
            <View
              style={[
                styles.TextInput,
                focusedInput === "confirm_password" && {
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
                  <Text style={styles.TextInputTitle}>Confirm Password</Text>
                  <TextInput
                    maxLength={25}
                    placeholder="***********"
                    placeholderTextColor="#212121"
                    style={{ padding: 0, marginTop: 3, fontSize: 16 }}
                    secureTextEntry={!passwordConfirmVisible}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    onFocus={() => setFocusedInput("confirm_password")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    setPasswordConfirmVisible(!passwordConfirmVisible)
                  }
                >
                  {passwordConfirmVisible ? (
                    <Feather name="eye" size={20} color={"#333333"} />
                  ) : (
                    <Image
                      source={require("@/assets/images/eye-close-line.png")}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <Spacer size={20} />
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
