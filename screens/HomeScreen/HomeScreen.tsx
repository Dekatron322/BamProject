import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

interface User {
	full_name: string;
	email: string;
	wallet_balance: string;
}

interface Category {
	id: number;
	image: any;
	label: string;
	url: string;
}

const categories: Category[] = [
	{
		id: 1,
		image: require("@/assets/images/fi-sr-home copy.png"),
		label: "Rent",
		url: "rents",
	},
	{
		id: 2,
		image: require("@/assets/images/fi-sr-bulb copy.png"),
		label: "Power",
		url: "power",
	},
	{
		id: 3,
		image: require("@/assets/images/fi-sr-raindrops copy.png"),
		label: "Water",
		url: "water",
	},
	{
		id: 4,
		image: require("@/assets/images/fi-sr-shield-exclamation.png"),
		label: "Alert",
		url: "alert",
	},
	{
		id: 5,
		image: require("@/assets/images/Notification copy.png"),
		label: "Notice",
		url: "notifications",
	},
	{
		id: 6,
		image: require("@/assets/images/gear.png"),
		label: "mainten..",
		url: "maintenance",
	},
	{
		id: 7,
		image: require("@/assets/images/fi-sr-settings copy.png"),
		label: "Service",
		url: "service",
	},
	{
		id: 8,
		image: require("@/assets/images/Category copy.png"),
		label: "More",
		url: "categories",
	},
];

export default function HomeScreen() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [showBalance, setShowBalance] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	const fetchUserData = async () => {
		try {
			const token = await AsyncStorage.getItem("authToken");
			if (token) {
				const response = await axios.get<User>(
					"https://fms.nelfundjobs.com.ng/api/user",
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				setUser(response.data);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	const onRefresh = () => {
		setRefreshing(true);
		fetchUserData();
	};

	const renderUserName = () => {
		if (loading) return "Loading...";
		if (user) {
			return user?.full_name?.trim() || user?.email || "User";
		}
		return "User";
	};

	const renderWalletBalance = () => {
		if (loading) return "Loading...";
		if (user) {
			return showBalance ? `NGN ${user?.wallet_balance || "0.00"}` : "*******";
		}
		return "NGN 0.00";
	};

	const toggleBalanceVisibility = () => {
		setShowBalance(!showBalance);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#F2F6F8" }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						tintColor='#044982'
						colors={["#044982"]}
					/>
				}
			>
				<Spacer size={16} />
				<View
					style={{
						paddingHorizontal: 20,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
						<Image source={require("@/assets/images/Avt.png")} />
						<View>
							<Text
								style={{
									fontFamily: "GilroyMedium",
									fontSize: 16,
									color: "#171D19",
								}}
							>
								{renderUserName()}
							</Text>
							<Spacer size={4} />
							<Text
								style={{
									fontFamily: "GilroyRegular",
									fontSize: 12,
									color: "#000000",
								}}
							>
								Property ID:{" "}
								<Text
									style={{
										fontFamily: "GilroyBold",
										fontSize: 12,
										color: "#044982",
									}}
								>
									AMD-001
								</Text>
							</Text>
						</View>
					</View>
					<TouchableOpacity
						style={{
							padding: 10,
							backgroundColor: "#F0F0F0",
							borderRadius: 100,
						}}
						onPress={() => router.push("/(routes)/notifications")}
					>
						<Image source={require("@/assets/images/fi-sr-bell.png")} />
					</TouchableOpacity>
				</View>
				<Spacer size={20} />
				<View style={{ paddingHorizontal: 20 }}>
					<View
						style={{
							backgroundColor: "#044982",
							padding: 22,
							borderRadius: 15,
							position: "relative",
						}}
					>
						<View
							style={{
								justifyContent: "space-between",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "#A8A8A8",
									fontFamily: "GilroyRegular",
									fontSize: 12,
								}}
							>
								Available balance
							</Text>
							<TouchableOpacity onPress={toggleBalanceVisibility}>
								<Image
									style={{ height: 21, width: 21 }}
									source={
										showBalance
											? require("@/assets/images/View_light copy.png")
											: require("@/assets/images/View_light copy.png")
									}
								/>
							</TouchableOpacity>
						</View>
						<Spacer size={2} />
						<Text
							style={{
								color: "#FFFFFF",
								fontFamily: "GilroySemiBold",
								fontSize: 20,
							}}
						>
							{renderWalletBalance()}
						</Text>
						<Spacer size={18} />
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image source={require("@/assets/images/line.png")} />
						</View>
						<Spacer size={18} />
						<Text
							style={{
								fontSize: 14,
								textAlign: "center",
								fontFamily: "GilroyRegular",
								color: "#A8A8A8",
							}}
						>
							Rent : 5 Month Remaining
						</Text>
						<Spacer size={18} />
						<TouchableOpacity
							style={{
								position: "absolute",
								bottom: -26,
								left: "55%",
								transform: [{ translateX: -79 }],
								flexDirection: "row",
								alignItems: "center",
								gap: 10,
								backgroundColor: "#FDCF09",
								height: 52,
								width: 158,
								justifyContent: "center",
								borderRadius: 22,
							}}
						>
							<Image
								style={{ height: 24, width: 24 }}
								source={require("@/assets/images/Icon Button.png")}
							/>
							<Text style={{ fontFamily: "GilroySemiBold", color: "#16194A" }}>
								Top up wallet
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Spacer size={45} />
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image source={require("@/assets/images/Based.png")} />
					<View
						style={{
							paddingHorizontal: 20,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<Text
							style={{
								color: "#171D19",
								fontFamily: "GilroyMedium",
								fontSize: 18,
							}}
						>
							Categories
						</Text>

						<Text
							style={{
								color: "#EEC202",
								fontFamily: "GilroyMedium",
								fontSize: 14,
							}}
							onPress={() => router.push("/(routes)/categories")}
						>
							View all
						</Text>
					</View>
				</View>
				<Spacer size={18} />
				<View style={{ paddingHorizontal: 20 }}>
					<View
						style={{
							borderRadius: 18,
							backgroundColor: "#ffffff",
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						{categories.map((category) => (
							<TouchableOpacity
								key={category.id}
								style={{
									width: "25%",
									alignItems: "center",
									marginBottom: 20,
									marginTop: 20,
								}}
								onPress={() => router.push(`/(routes)/${category.url}`)}
							>
								<Image
									style={{ height: 24, width: 24, objectFit: "contain" }}
									source={category.image}
								/>
								<Spacer size={5} />
								<Text
									style={{
										color: "#374957",
										fontFamily: "GilroyMedium",
										fontSize: 14,
									}}
								>
									{category.label}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
				<Spacer size={30} />
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image source={require("@/assets/images/Based.png")} />
					<View
						style={{
							paddingHorizontal: 20,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<Text
							style={{
								color: "#171D19",
								fontFamily: "GilroyMedium",
								fontSize: 18,
							}}
						>
							Recent Activities
						</Text>
						<TouchableOpacity
							onPress={() => router.push("/(routes)/notifications")}
						>
							<Text
								style={{
									color: "#EEC202",
									fontFamily: "GilroyMedium",
									fontSize: 14,
								}}
							>
								View all
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Spacer size={20} />
				<View style={{ paddingHorizontal: 20 }}>
					<View
						style={{
							backgroundColor: "#ffffff",
							padding: 20,
							borderRadius: 18,
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					>
						<View
							style={{ gap: 10, flexDirection: "row", alignItems: "center" }}
						>
							<Image
								style={{ height: 32, width: 32 }}
								source={require("@/assets/images/Group 33684.png")}
							/>
							<View>
								<Text
									style={{
										color: "#38434A",
										fontFamily: "GilroyMedium",
										fontSize: 14,
									}}
								>
									Rent | <Text style={{ color: "#05C592" }}>Success</Text>
								</Text>
								<Spacer size={4} />
								<Text
									style={{
										color: "#16194A",
										fontFamily: "GilroyMedium",
										fontSize: 14,
									}}
								>
									38.7 Units
								</Text>
							</View>
						</View>
						<View
							style={{ gap: 10, flexDirection: "row", alignItems: "center" }}
						>
							<View>
								<Text
									style={{
										color: "#FF6A5A",
										textAlign: "right",
										fontFamily: "GilroyMedium",
									}}
								>
									-$56,000
								</Text>
								<Spacer size={4} />
								<Text
									style={{
										color: "#A8A8A8",
										fontFamily: "GilroyRegular",
										fontSize: 12,
									}}
								>
									26/09/23 8:30
								</Text>
							</View>
							<TouchableOpacity>
								<Entypo name='chevron-thin-right' size={18} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
