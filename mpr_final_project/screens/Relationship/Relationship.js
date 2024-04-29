import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useNavigation } from '@react-navigation/native'; // Import thư viện navigation

const Relationship = () => {
  const navigation = useNavigation();
  // Danh sách "Parents"
  const [parents, setParents] = useState([
    { id: 1, name: 'Dad' },
    { id: 2, name: 'Mom' },    
  ]);

  // Danh sách "Friends"
  const [friends, setFriends] = useState([
    { id: 1, name: 'Phuc' },
    { id: 2, name: 'Hien' },
    { id: 3, name: 'Lee' },
  ]);

  // Hàm xử lý khi nhấn vào một người bạn hoặc phụ huynh
  const handleInteraction = (person) => {
    navigation.navigate('Interaction', { person }); // Điều hướng sang màn hình Interaction và truyền thông tin về người được chọn
  };

  return (
    <View style={styles.container}>
      <Header text="Relationship"/>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parents</Text>
          {parents.map((parent) => (
            <TouchableOpacity key={parent.id} onPress={() => handleInteraction(parent)}>
              <PrimaryButton text={parent.name}/>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Friends</Text>
          {friends.map((friend) => (
            <TouchableOpacity key={friend.id} onPress={() => handleInteraction(friend)}>
              <PrimaryButton text={friend.name}/>
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
});

export default Relationship;
