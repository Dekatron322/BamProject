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
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [buttonSpinner, setButtonSpiner] = useState(false);
	const [focusedInput, setFocusedInput] = useState<string | null>(null);

	const handleSignIn = async () => {
		setButtonSpiner(true);

		try {
			const response = await axios.post(
				"https://fms.nelfundjobs.com.ng/api/login",
				{
					email: email,
					password: password,
				}
			);

			if (response.data && response.data.token) {
				// Save the token in AsyncStorage
				await AsyncStorage.setItem("authToken", response.data.token);

				// Show success message
				showMessage({
					message: "Login Successful",
					description: "You have successfully logged in.",
					type: "success",
					backgroundColor: "#05C592",
					icon: "success",
				});

				console.log("Login successful, token:", response.data.token);

				// Navigate to the home screen after a short delay
				setTimeout(() => {
					router.push("/(tabs)/home");
				}, 1500);
			} else {
				showMessage({
					message: "Login Failed",
					description: "No token received from the server.",
					type: "danger",
					backgroundColor: "#FF3B30",
					icon: "danger",
					textStyle: { fontFamily: "GilroyMedium" },
				});
			}
		} catch (error) {
			showMessage({
				message: "Login Failed",
				description: "An error occurred. Please try again.",
				type: "danger",
				backgroundColor: "#FF3B30",
				icon: "danger",
				textStyle: { fontFamily: "GilroyMedium" },
			});
			console.error("Login error:", error);
		} finally {
			setButtonSpiner(false);
		}
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
						<Feather name='arrow-left' size={24} />
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
										placeholder='amd@gmail.com'
										placeholderTextColor='#212121'
										style={{ padding: 0, marginTop: 3, fontSize: 16 }}
										onFocus={() => setFocusedInput("email")}
										onBlur={() => setFocusedInput(null)}
										onChangeText={setEmail}
										value={email}
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
										placeholder='***********'
										placeholderTextColor='#212121'
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
										<Feather name='eye' size={20} color={"#333333"} />
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
							<ActivityIndicator size='small' color='#ffffff' />
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
