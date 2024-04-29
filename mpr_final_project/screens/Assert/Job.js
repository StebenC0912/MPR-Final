import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useStats } from '../../store/StatContext';

const Job = ({ route }) => {
  const { currentLevel } = route.params;
  const { modifyStats, modifyBankBalance, incrementAge } = useStats();

  const jobList = [
    { id: 1, title: 'Software Developer', requiredLevel: 3, effects: { bankBalance: 2000, health: -10, happy: 5, smart: 10, look: 0, age: 2 }},
    { id: 2, title: 'Data Scientist', requiredLevel: 3, effects: { bankBalance: 2500, health: -5, happy: 10, smart: 15, look: 0, age: 2 }},
    { id: 3, title: 'Product Manager', requiredLevel: 2, effects: { bankBalance: 1500, health: -5, happy: 15, smart: 5, look: 0, age: 1 }},
    { id: 4, title: 'Elementary School Teacher', requiredLevel: 1, effects: { bankBalance: 1000, health: 0, happy: 20, smart: 5, look: 0, age: 1 }},
    { id: 5, title: 'High School Teacher', requiredLevel: 2, effects: { bankBalance: 1200, health: 0, happy: 10, smart: 10, look: 0, age: 1 }},
];


  const handleJobSelection = (job) => {
    modifyStats({
      happy: job.effects.happy,
      health: job.effects.health,
      smart: job.effects.smart,
      look: job.effects.look
    });
    modifyBankBalance(job.effects.bankBalance);
    for (let i = 0; i < job.effects.age; i++) {
      incrementAge();
    }

    Alert.alert("Job Accepted", `Congratulations, you have accepted the job: ${job.title}. Your stats have been updated.`);
  };

  return (
    <View style={styles.container}>
      <Header text="Job Opportunities"/>
      <ScrollView style={styles.content}>
        {jobList.filter(job => job.requiredLevel <= currentLevel).map(job => (
          <PrimaryButton
            key={job.id}
            text={job.title}
            onPress={() => handleJobSelection(job)}
          />
        ))}
      </ScrollView>
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

export default Job;
