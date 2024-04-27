import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Assert = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Assert</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Loan')}>
          <Text style={styles.label}>Job</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PartJob')}>
          <Text style={styles.label}>Part-time Job</Text>
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
  label: {
    fontSize: 18,
    color: '#34495e',
    paddingVertical: 10,
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

export default Assert;
