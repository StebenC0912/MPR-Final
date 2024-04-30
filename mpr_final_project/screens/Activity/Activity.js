import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Activity = () => {
  const { modifyStats, modifyBankBalance } = useStats();
  const navigation = useNavigation();

  const handleHospitalVisit = () => {
    modifyBankBalance(-50000); // Subtract $500 from bank balance
    modifyStats({ health: +50, happy: 0, smart: 0, look: 0 }); // Increase health by 20%
    Alert.alert('Hospital Visit', 'You have paid $50000  and increased your health by 20%.');
  };


const handleExercise = () => {
    modifyStats({ health: +10, happy: +5, look: +2, smart: 0 }); // Exercise affects health, happiness, and looks
    Alert.alert('Exercise', 'You feel healthier, happier, and more attractive!');
};

const handleMeditate = () => {
    modifyStats({ happy: +15, health: +5, smart: 0, look: 0 }); // Meditation increases happiness and health
    Alert.alert('Meditate', 'You feel more at peace and slightly healthier.');
};

const handleGoTraveling = () => {
    modifyBankBalance(-20000); // Traveling costs $20,000
    modifyStats({ happy: +20, health: -5, smart: 0, look: 0 }); // Traveling increases happiness but can be tiring
    Alert.alert('Go Traveling', 'You spent $20,000 but had a great time!');
};

const handlePlayingVideoGames = () => {
    modifyStats({ happy: +5, smart: -2, health: 0, look: 0 }); // Video games increase happiness but decrease smarts
    Alert.alert('Playing Video Games', 'You had fun playing video games, but maybe it was too much screen time.');
};
  const handleShoppingPress = () => {
    navigation.navigate('Shop');
  };

  
  return (
    <View style={styles.container}>
      <Header text="Activity"/>
      <View style={styles.content}>
        <PrimaryButton onPress={handleHospitalVisit} text="Hospital"/>
        <PrimaryButton onPress={handleExercise} text="Exercise"/>
        <PrimaryButton onPress={handleMeditate} text="Meditate"/>
        <PrimaryButton onPress={handleGoTraveling} text="Go Traveling"/>
        <PrimaryButton onPress={handlePlayingVideoGames} text="Play Video Games"/>
        <PrimaryButton onPress={handleShoppingPress} text="Shopping"/>
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
  progressBarBackground: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dfe4ea',
    overflow: 'hidden',
    marginVertical: 5,
  },
  progressBarForeground: {
    height: '100%',
    borderRadius: 10,
  },
});

export default Activity;