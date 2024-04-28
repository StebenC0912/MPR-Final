import { StyleSheet, View } from "react-native";
import { color } from "../../constants/color";
const ProgressBar = ({ progress, color }) => (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { width: `${progress}%`, backgroundColor: color },
        ]}
      />
    </View>
);
const styles = StyleSheet.create({
    progressBarContainer: {
        height: 20,
        flex: 1,
        backgroundColor: color.colors.gray88,
        borderRadius: 10,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        borderRadius: 10,
    },
})

export default ProgressBar;