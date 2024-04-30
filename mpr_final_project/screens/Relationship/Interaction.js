import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const Interaction = ({ route }) => {
  const { person } = route.params;
  const navigation = useNavigation();

  const interactions = [
    { id: 1, name: 'Send message' },
    { id: 2, name: 'Send gift' },
  ];

  const handleInteraction = (interaction) => {
    switch (interaction) {
      case 'Send message':
        // alert(`Sending message to ${person.name}`);
        navigation.navigate('MessagingScreen', {person})
        break;
      case 'Send gift':
        alert(`Sending gift to ${person.name}`);
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    // <TouchableOpacity onPress={() => handleInteraction(item.name)} style={styles.interaction}>
    //   <Text>{item.name}</Text>
    // </TouchableOpacity>
    <PrimaryButton text={item.name} onPress={() => handleInteraction(item.name)} />
  );

  const text = `Interactions with ${person.name}`

  return (
    <View style={styles.container}>
      <Header text={text}/>
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
