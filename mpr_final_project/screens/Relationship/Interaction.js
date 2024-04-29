import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Interaction = ({ route, navigation }) => {
  // Lấy thông tin về người được chọn từ route.params
  const { person } = route.params;

  // Danh sách các lựa chọn tương tác
  const interactions = [
    { id: 1, name: 'Send message' },
    { id: 2, name: 'Send gift' },
    // Thêm các lựa chọn tương tác khác nếu cần
  ];

  // Hàm xử lý khi người dùng chọn một tùy chọn tương tác
  const handleInteraction = (interaction) => {
    // Xử lý tùy chọn tương tác ở đây
    switch (interaction) {
      case 'Send message':
        alert(`Sending message to ${person.name}`);
        break;
      case 'Send gift':
        alert(`Sending gift to ${person.name}`);
        break;
      // Thêm các tùy chọn tương tác khác ở đây
      default:
        break;
    }
  };

  // Render mỗi mục trong danh sách tương tác
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleInteraction(item.name)} style={styles.interaction}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactions with {person.name}</Text>
      <FlatList
        data={interactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '80%',
  },
  interaction: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Interaction;
