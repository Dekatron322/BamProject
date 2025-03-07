import ProfileHeader from "@/components/CustomUIComponets/ProfileHeader";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProfileHeader title="Profile" showHistory={true} />
        <Spacer size={20} />
        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderColor: "#000000",
            opacity: 0.1,
          }}
        ></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer size={25} />
          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <View style={styles.cardContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
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
                    backgroundColor: "#044982",
                    width: 95,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <Text style={{ color: "#F3F3F3" }}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Spacer size={25} />

            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Home.png")} />
                  <Text style={styles.rhs}>Property Info.</Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Notification.png")} />
                  <Text style={styles.rhs}>Notification Settings</Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>
              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Danger.png")} />
                  <Text style={styles.rhs}>Help Center</Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Lock.png")} />
                  <Text style={styles.rhs}>Change Password</Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>
            </View>

            <Spacer size={25} />

            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Shield.png")} />
                  <Text style={styles.rhs}>Terms of Service </Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Shield.png")} />
                  <Text style={styles.rhs}>Privacy Policy </Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Shield.png")} />
                  <Text style={styles.rhs}>Share App </Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Shield.png")} />
                  <Text style={styles.rhs}>Website </Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>

              <Spacer size={30} />

              <View style={styles.cardContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Image source={require("@/assets/images/Logout.png")} />
                  <Text style={styles.rhs}>Log Out </Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} />
              </View>
            </View>
          </View>

          <Spacer size={60} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6F8",
  },
  lhs: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#888c8b",
  },
  rhs: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    marginTop: 2,
    color: "#38434A",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
