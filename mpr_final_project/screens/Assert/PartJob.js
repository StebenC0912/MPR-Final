import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useStats } from "../../store/StatContext"; // Ensure the import path is correct
import Header from "../../components/layout/Header";
import { color } from "../../constants/color";

const PartJob = ({ navigation }) => {
  const { modifyBankBalance } = useStats();

  const handleSelectJob = (amount) => {
    modifyBankBalance(amount); // Update bank balance by the job's amount
    navigation.goBack(); // Optionally go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Header text="Select a Part-Time Job" />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.jobButton}
          onPress={() => handleSelectJob(100)}
        >
          <Text style={styles.jobText}>Cleaning Houses - Earn $100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.jobButton}
          onPress={() => handleSelectJob(200)}
        >
          <Text style={styles.jobText}>Babysitting - Earn $200</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  jobButton: {
    backgroundColor: color.colors.darkBlue,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: color.colors.white,
  },
  jobText: {
    color: color.colors.white,
    fontSize: 16,
  },
});

export default PartJob;
