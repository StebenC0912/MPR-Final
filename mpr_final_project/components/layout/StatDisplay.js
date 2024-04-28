import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "./ProgressBar";
import { color } from "../../constants/color";

const StatDisplay = ({ label, progress, color }) => (
  <View style={styles.stat}>
    <Text style={styles.statLabel}>{label}</Text>
    <ProgressBar progress={progress} color={color} />
  </View>
);

const styles = {
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  statLabel: {
    fontSize: 16,
    color: color.colors.black,
    marginRight: 5,
  },
};

export default StatDisplay;
