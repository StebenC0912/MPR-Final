import { StyleSheet, View } from "react-native";
import StatDisplay from "./StatDisplay";
import Icon from "react-native-vector-icons/MaterialIcons";

const StatContent = ({iconName, iconSize, iconColor, label, progress, color}) => {
  return (
    <View style={styles.statItem}>
      <Icon name={iconName} size={iconSize} color={iconColor} style={styles.iconStyle} />
      <StatDisplay
        label={label}
        progress={progress}
        color={color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingRight: 20,
  },
  iconStyle: {
    marginRight: 3,
  },
});

export default StatContent;
