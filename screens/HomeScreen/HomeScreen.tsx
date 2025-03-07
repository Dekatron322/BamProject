import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const categories = [
  {
    id: 1,
    image: require("@/assets/images/Rent_Green.png"),
    label: "Rent",
    url: "rents",
  },
  {
    id: 2,
    image: require("@/assets/images/Bulb.png"),
    label: "Power",
    url: "power",
  },
  {
    id: 3,
    image: require("@/assets/images/fi-sr-raindrops.png"),
    label: "Water",
    url: "water",
  },
  {
    id: 4,
    image: require("@/assets/images/Alert.png"),
    label: "Alert",
    url: "alert",
  },
  {
    id: 5,
    image: require("@/assets/images/Notice.png"),
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
    image: require("@/assets/images/fi-sr-settings.png"),
    label: "Service",
    url: "service",
  },
  {
    id: 8,
    image: require("@/assets/images/Category.png"),
    label: "More",
    url: "categories",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F6F8" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                Harry Tran
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
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#044982",
              padding: 22,
              borderRadius: 15,
              position: "relative", // Required to use absolute positioning inside
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
              <Image source={require("@/assets/images/View_light.png")} />
            </View>
            <Spacer size={2} />
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "GilroySemiBold",
                fontSize: 20,
              }}
            >
              NGN 200,000.00
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
                bottom: -26, // Half of the button height (52/2)
                left: "55%",
                transform: [{ translateX: -79 }], // Half of the button width (158/2)
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
              <Image source={require("@/assets/images/Icon_Button.png")} />
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
                  width: "25%", // Adjust to show 4 items per row
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
              <Image source={require("@/assets/images/home_new.png")} />
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
                <Entypo name="chevron-thin-right" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
