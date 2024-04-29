import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/layout/Header';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  return (
    <View style={styles.container}>
      <Header text="Relationship"/>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
           <Icon name="family-restroom" size={24} color="#007AFF" /> Parents
          </Text>
          {parents.map((parent) => (
            <TouchableOpacity key={parent.id} onPress={() => handleInteraction(parent)}>
              <Text style={styles.btn}>{parent.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon name="people" size={24} color="#007AFF" /> Friends
          </Text>
          {friends.map((friend) => (
            <TouchableOpacity key={friend.id} onPress={() => handleInteraction(friend)}>
              <Text style={styles.btn}>{friend.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  btn: {
    fontSize: 18,
    color: color.colors.darkBlue,
    paddingVertical: 10,
    backgroundColor: color.colors.darkGray,
    marginTop: 10,
    padding: 10,
    textAlign: "center"
  },
});

export default Relationship;
