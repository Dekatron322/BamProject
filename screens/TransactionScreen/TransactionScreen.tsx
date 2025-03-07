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

const transactions = [
  {
    id: 1,
    title: "Rent",
    amount: "-₦256,000",
    date: "Yesterday 2:45pm",
    image: require("@/assets/images/rent.png"),
    color: "#FF6A5A",
  },
  {
    id: 2,
    title: "Power",
    amount: "-₦15,000",
    date: "Yesterday 10:30am",
    image: require("@/assets/images/power.png"),
    color: "#FF6A5A",
  },
  {
    id: 3,
    title: "Top Up",
    amount: "+₦56,000",
    date: "Yesterday 10:30am",
    image: require("@/assets/images/topUp.png"),
    color: "#044982",
  },
  // Add more transactions as needed
];

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProfileHeader title="Transaction History" showHistory={true} />
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
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderWidth: 1,
                  padding: 16,
                  flex: 1,
                  flexDirection: "row",
                  borderBottomStartRadius: 8,
                  borderTopStartRadius: 8,
                  borderColor: "#0000001A",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "GilroyMedium",
                    fontSize: 14,
                    color: "#38434A",
                  }}
                >
                  All Category
                </Text>
                <Entypo name="chevron-thin-down" size={18} />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  padding: 16,
                  flex: 1,
                  flexDirection: "row",
                  borderBottomEndRadius: 8,
                  borderTopEndRadius: 8,
                  justifyContent: "flex-end",
                  borderColor: "#0000001A",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "GilroyMedium",
                    fontSize: 14,
                    color: "#38434A",
                  }}
                >
                  All States
                </Text>
                <Entypo name="chevron-thin-down" size={18} />
              </View>
            </View>
            <Spacer size={20} />
            {transactions.map((transaction) => (
              <View
                key={transaction.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 8, // Add some spacing between cards
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
                    <Image source={transaction.image} />
                    <View>
                      <Text
                        style={{
                          fontFamily: "GilroyMedium",
                          fontSize: 16,
                          color: "#171D19",
                        }}
                      >
                        {transaction.title}
                      </Text>
                      <Spacer size={4} />
                      <Text
                        style={{
                          fontFamily: "GilroyMedium",
                          fontSize: 12,
                          color: "#000000",
                          opacity: 0.5,
                        }}
                      >
                        {transaction.date}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "GilroyMedium",
                        fontSize: 16,
                        color: transaction.color,
                      }}
                    >
                      {transaction.amount}
                    </Text>
                    <TouchableOpacity>
                      <Entypo name="chevron-thin-right" size={18} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
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
