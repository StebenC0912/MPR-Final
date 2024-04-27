import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Job = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Job Opportunities</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { jobId: 1 })}>
          <Text style={styles.jobLabel}>Software Developer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { jobId: 2 })}>
          <Text style={styles.jobLabel}>Data Scientist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { jobId: 3 })}>
          <Text style={styles.jobLabel}>Product Manager</Text>
        </TouchableOpacity>
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
  jobLabel: {
    fontSize: 18,
    color: '#34495e',
    paddingVertical: 10,
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default Job;
