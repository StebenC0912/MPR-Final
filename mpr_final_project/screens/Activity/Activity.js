import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary

const ProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.progressBarBackground}>
      <View style={[styles.progressBarForeground, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );
};

const Activity = () => {
  const { modifyStats, modifyBankBalance } = useStats(); // Use the context hook to access functionality

  const handleHospitalVisit = () => {
    modifyBankBalance(-500); // Subtract $250 from bank balance
    modifyStats({ health: 20 }); // Increase health by 20%
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Activity</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleHospitalVisit}>
          <Text style={styles.label}>Hospital</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Shopping</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: '#34495e',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#34495e',
    paddingVertical: 10,
    backgroundColor: '#ccc',
    marginTop: 10,
    padding: 10,
  },
  progressBarBackground: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dfe4ea',
    overflow: 'hidden',
    marginVertical: 5,
  },
  progressBarForeground: {
    height: '100%',
    borderRadius: 10,
  },
});

export default Activity;
