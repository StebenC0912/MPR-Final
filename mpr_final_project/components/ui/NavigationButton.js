import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { color } from "../../constants/color";

const NavigationButton = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <FontAwesome5 name={icon} size={24} color="white" />
    <Text style={styles.navText}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 10,
    color: color.colors.white,
  },
};

export default NavigationButton;
