import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Activity = () => {
  const { modifyStats, modifyBankBalance } = useStats();
  const navigation = useNavigation(); // Use the navigation hook

  const handleHospitalVisit = () => {
    modifyBankBalance(-500); // Subtract $500 from bank balance
    modifyStats({ health: 20 }); // Increase health by 20%
    Alert.alert(
      'Hospital Visit',
      'You have paid $500 and increased your health by 20%.',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  const handleShoppingPress = () => {
    navigation.navigate('Shop'); // Navigate to Shop screen
  };

  return (
    <View style={styles.container}>
      <Header text="Activity"/>
      <View style={styles.content}>
        <PrimaryButton onPress={handleHospitalVisit} text="Hospital"/>
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