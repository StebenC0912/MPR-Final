import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Assert = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Assert"/>
      <View style={styles.content}>
        <PrimaryButton onPress={() => navigation.navigate('Job')} text="Job"/>
        <PrimaryButton onPress={() => navigation.navigate('PartJob')} text="Part-Time Job"/>
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

export default Assert;
