import React from 'react';
import { View, Alert, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { useStats } from '../../store/StatContext'; // Make sure this path is correct

const Interaction = ({ route }) => {
  const navigation = useNavigation();
  const { person } = route.params;
  const { modifyStats, modifyBankBalance } = useStats(); // Moved inside the component

  const interactions = [
    { id: 1, name: 'Send message' },
    { id: 2, name: 'Send gift' },
    { id: 3, name: 'Ask for advice' },
    { id: 4, name: 'Go on a date' },
    { id: 5, name: 'Invite to event' },
    { id: 6, name: 'Help with a problem' },
  ];

  const handleInteraction = (interaction) => {
    switch (interaction) {
      case 'Send message':
        navigation.navigate('MessagingScreen', { person });
        break;
        case 'Send gift':
      modifyBankBalance(-100);
      modifyStats({ happy: +10, health: 0, smart: 0, look: 0 });
      Alert.alert('Send Gift', `You sent a gift to ${person.name} and spent $100.`);
      break;
    case 'Ask for advice':
      modifyStats({ happy: +5, health: 0, smart: +5, look: 0 });
      Alert.alert('Ask for Advice', `You asked ${person.name} for advice, gaining knowledge and happiness.`);
      break;
    case 'Go on a date':
      modifyBankBalance(-200);
      modifyStats({ happy: +20, health: 0, smart: 0, look: 0 });
      Alert.alert('Go on a Date', `You went on a date with ${person.name} and spent $200. It was fun!`);
      break;
    case 'Invite to event':
      modifyBankBalance(-150);
      modifyStats({ happy: +15, health: 0, smart: 0, look: 0 });
      Alert.alert('Invite to Event', `You invited ${person.name} to an event and spent $150.`);
      break;
    case 'Help with a problem':
      modifyStats({ happy: +10, smart: +10, health: +5, look: 0 });
      Alert.alert('Help with a Problem', `You helped ${person.name} solve a problem, improving happiness, smarts, and health.`);
      break;
    default:
      Alert.alert('Unknown Interaction', 'This interaction is not recognized.');
      break;
  }
  };

  const renderItem = ({ item }) => (
    <PrimaryButton text={item.name} onPress={() => handleInteraction(item.name)} />
  );

  const text = `Interactions with ${person.name}`;

  return (
    <View style={styles.container}>
      <Header text={text} />
      <View style={styles.lists}>
        <FlatList
          data={interactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lists: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  interaction: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  list: {
    width: 300
  }
});

export default Interaction;
