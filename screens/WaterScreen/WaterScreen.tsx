import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacer } from "@/components/CustomUIComponets/Spacer";
import CustomHeader from "@/components/CustomUIComponets/CustomHeader";
import { styles } from "@/styles/general/general";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { router } from "expo-router";

export default function WaterScreen() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null); // Default to a unit value
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const unitPrice = 840; // Price per unit

  const [selectedMethod, setSelectedMethod] = useState("Wallet");
  const [toggleOn, setToggleOn] = useState(false);
  const [code, setCode] = useState(new Array(4).fill(""));
  const [selectedPaymentType, setSelectedPaymentType] = useState("Prepaid");
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const totalAmount = ((selectedYear || customAmount || 0) / unitPrice).toFixed(
    2
  );

  const handleMethodSelect = (method: React.SetStateAction<string>) => {
    setSelectedMethod(method);
  };

  const years = [600, 1000, 2000, 3000, 5000, 6000];
  const payBottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const pinBottomSheetRef = useRef<BottomSheetMethods>(null);
  const snapPoints = useMemo(() => ["25%", "70%"], []);
  const paySnapPoints = useMemo(() => ["20%", "25%"], []);
  const pinSnapPoints = useMemo(() => ["30%", "50%"], []);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpiner] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(
    "Abuja Water Distribution"
  );
  const bottomSheetCompanyRef = useRef<BottomSheet>(null);
  const companySnapPoints = useMemo(() => ["30%", "40%"], []);

  const handleOpenPaymentTypeBottomSheet = () => {
    payBottomSheetRef.current?.expand();
  };

  const handleSelectPaymentType = (type: string) => {
    setSelectedPaymentType(type);
    payBottomSheetRef.current?.close();
  };

  const powerCompanies = [
    "Abuja Water Distribution",
    "Kano Electricity Distribution",
    "Eko Electricity Distribution",
    "Ikeja Electric",
    "Jos Electricity Distribution",
  ];

  const companyImages: { [key: string]: any } = {
    "Abuja Water Distribution": require("@/assets/images/AEDC-logo.png"),
    "Kano Electricity Distribution": require("@/assets/images/kedco.png"),
    "Eko Electricity Distribution": require("@/assets/images/eko.jpg"),
    "Ikeja Electric": require("@/assets/images/ikeja.png"),
    "Jos Electricity Distribution": require("@/assets/images/jos.jpeg"),
  };

  const handleOpenCompanyBottomSheet = () => {
    bottomSheetCompanyRef.current?.expand();
  };

  const handleCompanySelect = (company: string) => {
    setSelectedCompany(company);
    bottomSheetCompanyRef.current?.close();
  };

  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));

  const handleSignIn = () => {
    setButtonSpiner(true);

    setTimeout(() => {
      setButtonSpiner(false);
      router.push("/(routes)/waterSuccess");
    }, 3000);
  };

  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleOpenPinBottomSheet = () => {
    bottomSheetRef.current?.close(); // Close the first bottom sheet
    pinBottomSheetRef.current?.expand(); // Open the second bottom sheet
  };

  const handleSheetChanges = useCallback((index: number) => {
    setIsBottomSheetOpen(index >= 0);
  }, []);

  const handleToggle = () => {
    setToggleOn((prevState) => !prevState);
  };

  const handleCustomAmountChange = (amount: string) => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      setCustomAmount(numericAmount);
      setSelectedYear(null); // Reset selectedYear to allow custom amount to take precedence
    } else {
      setCustomAmount(null); // Reset customAmount if input is invalid
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Water Bill" showHistory={true} />
      <View style={styles.border}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer size={20} />

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.titleText}>Property Details</Text>
          <Spacer size={8} />
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.textSubTitle}>Major Company</Text>
              <Spacer size={8} />
              <TouchableOpacity
                onPress={handleOpenCompanyBottomSheet}
                style={styles.power}
              >
                <View style={styles.powerContent}>
                  <Image
                    style={{ height: 30, width: 50, objectFit: "contain" }}
                    source={companyImages[selectedCompany]}
                  />
                  <Text style={styles.titleText}>{selectedCompany}</Text>
                </View>
                <Feather name="chevron-down" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.border}></View>

            <View>
              <Text style={styles.textSubTitle}>Payment Type</Text>
              <Spacer size={8} />
              <TouchableOpacity
                onPress={handleOpenPaymentTypeBottomSheet}
                style={styles.power}
              >
                <View style={styles.powerContent}>
                  <Text style={styles.titleText}>{selectedPaymentType}</Text>
                </View>
                <Feather name="chevron-down" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.border}></View>

            <Text style={styles.textSubTitle}>Meter Number</Text>
            <Spacer size={8} />
            <Text style={styles.titleText}>123H-GR4-5241-800K2</Text>
          </View>

          <Spacer size={16} />

          <View style={styles.cardContainer}>
            <Text style={styles.textSubTitle}>Select Amount</Text>

            <Spacer size={8} />
            <View style={styles.wrapContent}>
              {years.map((year) => (
                <TouchableOpacity
                  key={year}
                  style={{
                    backgroundColor:
                      selectedYear === year ? "#044982" : "#F3F3F3",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 5,
                    width: "32%",
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    setSelectedYear(year);
                    setCustomAmount(null); // Reset customAmount when a predefined value is selected
                  }}
                >
                  <Text
                    style={{
                      color: selectedYear === year ? "#ffffff" : "#000000",
                      fontFamily: "GilroyMedium",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    {year}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.border}></View>

            <Text style={styles.textSubTitle}>Amount</Text>

            <Spacer size={8} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Image source={require("@/assets/images/Text.png")} />
                <TextInput
                  maxLength={25}
                  placeholder="Enter Amount"
                  placeholderTextColor="#21212166"
                  style={{
                    padding: 0,
                    fontSize: 16,
                    fontFamily: "GilroyMedium",
                  }}
                  value={customAmount ? customAmount.toString() : ""}
                  onChangeText={handleCustomAmountChange}
                />
              </View>

              <View
                style={{
                  backgroundColor: "#0449821A",

                  alignSelf: "flex-end",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#044982",
                    fontFamily: "GilroyBold",
                    fontSize: 16,
                  }}
                >
                  {totalAmount.toLocaleString()} m3
                </Text>
              </View>
            </View>
            <Spacer size={8} />
            <View style={styles.border}></View>
            <Text style={[styles.textSubTitle, { textAlign: "right" }]}>
              1 KWh = ₦ {unitPrice}
            </Text>
          </View>
        </View>
        <Spacer size={60} />
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#ffffff",
          height: 75,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#044982",
            fontFamily: "GilroyBold",
            fontSize: 20,
          }}
        >
          ₦{totalAmount.toLocaleString()}
        </Text>
        <TouchableOpacity
          style={[styles.btnContainer, { width: 139, height: 48 }]}
          onPress={handleOpenBottomSheet}
        >
          <Text style={styles.btnContent}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      {/* Overlay for shadow background */}
      {isBottomSheetOpen && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          }}
        />
      )}

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "#F7F9FB" }}
      >
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#212121",
                fontFamily: "GilroyMedium",
                textAlign: "center",
                flex: 1,
              }}
            >
              Payment
            </Text>
            <Feather
              name="x"
              size={18}
              onPress={() => bottomSheetRef.current?.close()}
            />
          </View>
          <Spacer size={16} />
          <Text
            style={{
              color: "#044982",
              fontFamily: "GilroyBold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            ₦{totalAmount.toLocaleString()}
          </Text>
          <Spacer size={8} />
          {/* <Text>
                {selectedYear} year{selectedYear > 1 ? "s" : ""}
              </Text> */}
          {/* Add more payment information as needed */}
          <View style={styles.cardContainer}>
            <View style={styles.rowContent}>
              <Text style={styles.textSubTitle}>Amount</Text>

              <Text style={styles.moreSubTitle}>
                {" "}
                ₦{totalAmount.toLocaleString()}
              </Text>
            </View>

            <Spacer size={10} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>Biller Name</Text>

              <Text style={styles.moreSubTitle}>Mal. Umar Suleman Sodangi</Text>
            </View>
            <Spacer size={10} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textSubTitle}>House ID</Text>

              <Text style={styles.moreSubTitle}>AMD-0001</Text>
            </View>
          </View>

          <Spacer size={16} />
          <Text style={styles.titleText}>Payment Method</Text>
          <Spacer size={8} />
          <View style={styles.cardContainer}>
            {/* Wallet Option */}
            <View style={styles.rowContent}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                onPress={() => handleMethodSelect("Wallet")}
              >
                <Image source={require("@/assets/images/Wallet.png")} />
                <Text style={styles.textSubTitle}>Wallet</Text>
                <Text style={styles.moreSubTitle}>
                  {" "}
                  ₦{totalAmount.toLocaleString()}
                </Text>
              </TouchableOpacity>

              {/* Check mark only for selected method */}
              {selectedMethod === "Wallet" && (
                <Image source={require("@/assets/images/Check.png")} />
              )}
            </View>

            <Spacer size={10} />
            <View style={styles.border}></View>
            <Spacer size={10} />

            {/* Paystack Option */}
            <View style={styles.rowContent}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                onPress={() => handleMethodSelect("Paystack")}
              >
                <Image source={require("@/assets/images/Paystack.png")} />
                <Text style={styles.textSubTitle}>Paystack</Text>
              </TouchableOpacity>

              {/* Check mark only for selected method */}
              {selectedMethod === "Paystack" && (
                <Image source={require("@/assets/images/Check.png")} />
              )}
            </View>
          </View>
          <Spacer size={16} />
          <View style={styles.cardContainer}>
            <View style={styles.rowContent}>
              <Text style={styles.textSubTitle}>Automatic Renewal</Text>

              <TouchableOpacity onPress={handleToggle}>
                <Fontisto
                  name={toggleOn ? "toggle-on" : "toggle-off"} // Conditional rendering
                  style={{ color: toggleOn ? "#044982" : "#D0D0D0" }} // Color changes with state
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Spacer size={16} />
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={handleOpenPinBottomSheet}
          >
            <Text style={styles.btnContent}>Confirm Payment</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      {/* Bottom Sheet for PIN Entry */}

      <BottomSheet
        ref={pinBottomSheetRef}
        index={-1}
        snapPoints={pinSnapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#212121",
                fontFamily: "GilroyMedium",
                textAlign: "center",
                flex: 1,
              }}
            >
              Enter Pin To Pay
            </Text>
            <Feather
              name="x"
              size={18}
              onPress={() => pinBottomSheetRef.current?.close()}
            />
          </View>
          <Spacer size={16} />
          <Text
            style={{
              color: "#044982",
              fontFamily: "GilroyBold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            ₦{totalAmount.toLocaleString()}
          </Text>
          <Spacer size={16} />
          <View style={styles.inputContainer}>
            {code.map((_, index) => (
              <TextInput
                key={index}
                style={styles.inputBox}
                keyboardType="number-pad"
                secureTextEntry={!passwordVisible}
                maxLength={1}
                onChangeText={(text) => handleInput(text, index)}
                value={code[index]}
                ref={inputs.current[index]}
                // returnKeyType="done"
                autoFocus={index === 0}
              />
            ))}
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <Feather name="eye" size={20} color={"#333333"} />
              ) : (
                <Image source={require("@/assets/images/eye-close-line.png")} />
              )}
            </TouchableOpacity>
          </View>
          <Spacer size={16} />
          <Text
            style={{
              color: "#044982",
              fontFamily: "GilroyMedium",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Forgot Pin
          </Text>
          {/* Add number buttons if needed */}
          {/* Example of a number button grid */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Render number buttons */}
          </View>
          <Spacer size={16} />
          <TouchableOpacity style={styles.btnContainer} onPress={handleSignIn}>
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnContent}>Confirm</Text>
            )}
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetCompanyRef}
        index={-1}
        snapPoints={companySnapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#212121",
                fontFamily: "GilroyMedium",
                textAlign: "center",
                flex: 1,
              }}
            >
              Select Company
            </Text>
            <Feather
              name="x"
              size={18}
              onPress={() => bottomSheetCompanyRef.current?.close()}
            />
          </View>
          {powerCompanies.map((company, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCompanySelect(company)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={companyImages[company]}
                style={{
                  height: 30,
                  width: 50,
                  marginRight: 10,
                  objectFit: "contain",
                }}
              />
              <Text style={styles.titleText}>{company}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>

      <BottomSheet
        ref={payBottomSheetRef}
        index={-1}
        snapPoints={paySnapPoints}
        backgroundStyle={{ backgroundColor: "#FFFFFF" }}
        onChange={handleSheetChanges}
      >
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#212121",
                fontFamily: "GilroyMedium",
                textAlign: "center",
                flex: 1,
              }}
            >
              Select Payment Type
            </Text>
            <Feather
              name="x"
              size={18}
              onPress={() => bottomSheetCompanyRef.current?.close()}
            />
          </View>
          <Spacer size={16} />
          <TouchableOpacity
            onPress={() => handleSelectPaymentType("Prepaid")}
            style={{ paddingVertical: 12 }}
          >
            <Text style={styles.titleText}>Prepaid</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelectPaymentType("Postpaid")}
            style={{ paddingVertical: 12 }}
          >
            <Text style={styles.titleText}>Postpaid</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
