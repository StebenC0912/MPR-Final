import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Relationship = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Relationship</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Parent</Text>
        <Text style={styles.label}>Friends</Text>
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

export default Relationship;
