import React from 'react';
import { useStats } from '../store/StatContext';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const EndGame = ({ navigation }) => {
  const { stats } = useStats();

  const handleRestart = () => {
    navigation.navigate('Intro'); // Ensure this navigates to your start or intro screen
  };

  return (
    <View style={styles.container}>
      <Image
            source={require("./../assets/images/grave.png")}
            style={styles.image}
          />
      <Text style={styles.header}>Game Over</Text>
      <Text style={styles.message}>Your journey ends here...</Text>
      <Text style={styles.score}>Final Score: {stats.bankBalance}</Text>
      <Text style={styles.cause}>Cause of Death: {stats.health <= 0 ? 'Unhealthy' : 'Unhappy'}</Text>
      <Button title="Start New Game" onPress={handleRestart} color="#1E90FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#282c34',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for emphasis
    marginBottom: 10
  },
  message: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20
  },
  score: {
    fontSize: 18,
    color: '#ADFF2F', // Green-yellow for a vibrant look
    marginBottom: 5
  },
  cause: {
    fontSize: 16,
    color: '#FF6347', // Tomato color to highlight the cause of death
    marginBottom: 20
  }
});

export default EndGame;
