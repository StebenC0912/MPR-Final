import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Relationship = () => {
  return (
    <View style={styles.container}>
      <Header text="Relationship"/>
      <View style={styles.content}>
        <PrimaryButton text="Parent"/>
        <PrimaryButton text="Friends"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 20,
  },
});

export default Relationship;
