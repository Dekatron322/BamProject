import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  firstContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: wp("70%"),
    // height: hp("50%"),
    objectFit: "contain",
  },
  titleWrapper: {
    flexDirection: "column",
  },

  paragraphText: {
    fontSize: 14,
    textAlign: "center",
  },
  footerContainer: {
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 8,
  },

  btnContainer: {
    height: 60,
    backgroundColor: "#004680",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  btnDisabled: {
    height: 60,
    backgroundColor: "#0449824A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    flex: 1,
  },

  btnOutlineContainer: {
    height: 60,
    borderColor: "#004680",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  buttonContainer: {
    flexDirection: "row",
    height: 60,
    borderWidth: 1,
    width: "100%",
    borderRadius: 100,
    borderColor: "#0a0a0a",
    backgroundColor: "#0a0a0a",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 50, // Adjust this value as needed
    alignSelf: "center",
  },

  newButtonContainer: {
    flexDirection: "row",
    backgroundColor: "#000000",
    width: responsiveWidth(88),
    height: responsiveHeight(7.5),
    borderColor: "#000000",

    borderRadius: 100,
    color: "#FAB319",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F6F8",
  },
  container2: {
    backgroundColor: "#ffffff",
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    opacity: 0.1,
    marginVertical: 10,
  },
  titleText: { color: "#212121", fontFamily: "GilroyMedium", lineHeight: 24 },
  cardContainer: {
    borderRadius: 18,
    backgroundColor: "#ffffff",
    padding: 20,
  },

  titleTextBold: {
    color: "#212121",
    fontFamily: "GilroyBold",
    lineHeight: 24,
    fontSize: 24,
  },

  textSubTitle: {
    color: "#00000080",
    fontFamily: "GilroyMedium",
    fontSize: 12,
    lineHeight: 20,
  },
  moreSubTitle: {
    color: "#212121",
    fontFamily: "GilroyMedium",
    fontSize: 12,
  },
  rowContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectDate: {
    backgroundColor: "#F3F3F3",
    padding: 4,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    borderRadius: 4,
  },
  btnContent: {
    fontFamily: "Manrope_500Medium",
    color: "#ffffff",
    fontSize: 16,
  },

  textContent: {
    fontFamily: "Manrope_500Medium",
    color: "#044982",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 60,
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#F7F9FB",
    textAlign: "center",
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,

    backgroundColor: "#ffffff",
  },

  power: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  powerContent: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  wrapContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  maintenanceContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  maintainanceLabel: {
    color: "#000000",
    fontFamily: "GilroyMedium",
    fontSize: 12,
  },
  requestContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  requestText: {
    color: "#000000",
    fontFamily: "GilroyMedium",
    fontSize: 16,
  },
  buttonRequest: {
    backgroundColor: "#044982",
    padding: 10,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  buttonInnerText: {
    color: "#ffffff",
    fontFamily: "GilroyMedium",
    fontSize: 14,
  },
  tabActive: {
    color: "#044982",
    fontFamily: "GilroyMedium",
    fontSize: 14,
  },
  tab: {
    color: "#0000004D",
    fontFamily: "GilroyMedium",
    fontSize: 14,
  },

  underline: {
    height: 2,
    backgroundColor: "#044982", // or any color you prefer
    width: "130%",
    marginTop: 10, // adjust the spacing as needed
  },
  requestBodyContainer: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  requestBodyContent: {
    flexDirection: "row",

    borderRadius: 16,
    alignItems: "center",

    gap: 6,
  },
  requestContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  requestBody: {
    fontFamily: "GilroyMedium",
    color: "#212121",
    opacity: 0.5,
    fontSize: 12,
  },
});
