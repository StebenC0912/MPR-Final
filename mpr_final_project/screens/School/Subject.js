// Subject.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subject = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Subject</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Mathematics</Text>
        <Text style={styles.label}>Literature</Text>
        <Text style={styles.label}>English</Text>
        <Text style={styles.label}>Science</Text>
        <Text style={styles.label}>Social Studies</Text>
        <Text style={styles.label}>Computer Principles</Text>
        <Text style={styles.label}>Programming</Text>
        <Text style={styles.label}>Philosophy</Text>
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
});

export default Subject;
