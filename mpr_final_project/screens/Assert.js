import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ProgressBar = ({ progress, color }) => {
    return (
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarForeground, { width: `${progress}%`, backgroundColor: color }]} />
      </View>
    );
  };
  
const Assert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Assert</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Loan</Text>
        <Text style={styles.label}>Part-time Job</Text>
   
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
  },
  progressBarBackground: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dfe4ea',
    overflow: 'hidden',
    marginVertical: 5, // Add some vertical space around the progress bar
  },
  progressBarForeground: {
    height: '100%',
    borderRadius: 10,
  },
})
export default Assert;
