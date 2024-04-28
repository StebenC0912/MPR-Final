import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Job = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Job Opportunities"/>
      <View style={styles.content}>
        <PrimaryButton 
          onPress={() => navigation.navigate('JobDetails', { jobId: 1 })}
          text="Software Developer"
        />
        <PrimaryButton
          onPress={() => navigation.navigate('JobDetails', { jobId: 2 })}
          text="Data Scientist"
        />
        <PrimaryButton
          onPress={() => navigation.navigate('JobDetails', { jobId: 3 })}
          text="Product Manager"
        />
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
  }
});

export default Job;
