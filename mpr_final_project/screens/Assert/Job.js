import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useStats } from '../../store/StatContext';

const Job = ({ route }) => {
  const { currentLevel } = route.params;
  const { modifyStats, modifyBankBalance, incrementAge } = useStats();

  const jobList = [
    {
      id: 1,
      title: 'Software Developer',
      requiredLevel: 3,
      effects: { bankBalance: 2000, health: -10, happy: 5, smart: 10, look: 0, age: 2 },
      description: `Salary: $2,000
  Effects: Health -10, Happiness +5, Smarts +10, Age +2 years
  `
    },
    {
      id: 2,
      title: 'Data Scientist',
      requiredLevel: 3,
      effects: { bankBalance: 2500, health: -5, happy: 10, smart: 15, look: 0, age: 2 },
      description: `Salary: $2,500
  Effects: Health -5, Happiness +10, Smarts +15, Age +2 years
  `
    },
    {
      id: 3,
      title: 'Product Manager',
      requiredLevel: 2,
      effects: { bankBalance: 1500, health: -5, happy: 15, smart: 5, look: 0, age: 1 },
      description: `Salary: $1,500
  Effects: Health -5, Happiness +15, Smarts +5, Age +1 year
  `
    },
    {
      id: 4,
      title: 'Elementary School Teacher',
      requiredLevel: 1,
      effects: { bankBalance: 1000, health: 0, happy: 20, smart: 5, look: 0, age: 1 },
      description: `Salary: $1,000
  Effects: Health 0, Happiness +20, Smarts +5, Age +1 year
  `
    },
    {
      id: 5,
      title: 'High School Teacher',
      requiredLevel: 2,
      effects: { bankBalance: 1200, health: 0, happy: 10, smart: 10, look: 0, age: 1 },
      description: `Salary: $1,200
  Effects: Health 0, Happiness +10, Smarts +10, Age +1 year
  `
    },
    {
      id: 6,
      title: 'Research Scientist',
      requiredLevel: 4, // Requires completion of PhD
      effects: { bankBalance: 3000, health: -5, happy: 5, smart: 20, look: 0, age: 2 },
      description: `Salary: $3,000\nEffects: Health -5, Happiness +5, Smarts +20, Age +2 years`},
    {
      id: 7,
      title: 'University Professor',
      requiredLevel: 5, // Requires being a Professor
      effects: { bankBalance: 3500, health: -10, happy: 15, smart: 25, look: 0, age: 2 },
      description: `Salary: $3,500\nEffects: Health -10, Happiness +15, Smarts +25, Age +2 years`},
    {
      id: 8,
      title: 'Postdoctoral Researcher',
      requiredLevel: 4, // Requires completion of PhD
      effects: { bankBalance: 2500, health: -5, happy: 10, smart: 15, look: 0, age: 2 },
      description: `Salary: $2,500\nEffects: Health -5, Happiness +10, Smarts +15, Age +2 years`
    },
    {
      id: 9,
      title: 'Tenure Track Professor',
      requiredLevel: 5, // Requires being a Professor
      effects: { bankBalance: 4000, health: -10, happy: 20, smart: 30, look: 0, age: 2 },
      description: `Salary: $4,000\nEffects: Health -10, Happiness +20, Smarts +30, Age +2 years`
    },
    {
      id: 10,
      title: 'Industry Researcher',
      requiredLevel: 4, // Requires completion of PhD
      effects: { bankBalance: 3200, health: -5, happy: 10, smart: 25, look: 0, age: 2 },
      description: `Salary: $3,200\nEffects: Health -5, Happiness +10, Smarts +25, Age +2 years\n`
    }
    
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
            text={`${job.title} - ${job.description}`}
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
