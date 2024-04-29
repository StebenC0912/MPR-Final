import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.listItem}>
    <PrimaryButton text={item.name} />
  </TouchableOpacity>
);

const Relationship = () => {
  const navigation = useNavigation();
  const [parents, setParents] = useState([
    { id: 1, name: 'Dad' },
    { id: 2, name: 'Mom' },
  ]);
  const [friends, setFriends] = useState([
    { id: 1, name: 'Phuc' },
    { id: 2, name: 'Hien' },
    { id: 3, name: 'Lee' },
  ]);

  const handleInteraction = (person) => {
    navigation.navigate('Interaction', { person });
  };

  const renderSection = (title, data) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} onPress={() => handleInteraction(item)} />}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header text="Relationship"/>
      <View style={styles.content}>
        {renderSection("Parents", parents)}
        {renderSection("Friends", friends)}
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 10,
  },
});

export default Relationship;
