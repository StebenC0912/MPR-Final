import React from 'react';
import { useStats } from '../store/StatContext';
import { View, Text, StyleSheet, Button } from 'react-native';

const EndGame = ({ navigation }) => {
  const { stats } = useStats();
  const handleRestart = () => {
    
    navigation.navigate('Intro'); // Replace 'NewGame' with the actual route name of your new game screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Over</Text>
      <Text style={styles.message}>Your journey ends here...</Text>
      <Text style={styles.score}>Final Score: {stats.bankBalance}</Text>
      <Text style={styles.cause}>Cause of Death: {stats.health <= 0 ? 'Health' : 'Happiness'}</Text>
      <Button title="Start New Game" onPress={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'  // Adjust the background color as needed
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  message: {
    fontSize: 18,
    marginBottom: 20
  },
  score: {
    fontSize: 16,
    marginBottom: 5
  },
  cause: {
    fontSize: 16,
    color: 'red'  // You can adjust the color to highlight the cause of death
  }
});

export default EndGame;
