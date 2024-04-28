import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { color } from "../../constants/color";

const PrimaryButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.label}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  label: {
    fontSize: 18,
    color: color.colors.darkBlue,
    paddingVertical: 10,
    backgroundColor: color.colors.darkGray,
    marginTop: 10,
    padding: 10,
    textAlign: "center"
  },
};

export default PrimaryButton;
