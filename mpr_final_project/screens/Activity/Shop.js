import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary
import Header from '../../components/layout/Header';

const Shop = ({ navigation }) => {
  const { modifyStats, modifyBankBalance } = useStats();

  const items = [
    {
      name: "Car",
      effects: {
        happy: 30,
        health: 0,
        smart: 0,
        look: 20,
        cost: -250000
      }
    },
    {
      name: "Motorbike",
      effects: {
        happy: 10,
        health: 0,
        smart: 0,
        look: 10,
        cost: -100000
      }
    },
    {
      name: "Bike",
      effects: {
        happy: 5,
        health: 0,
        smart: 0,
        look: 5,
        cost: -50000
      }
    }
  ];

  const handlePurchase = (item) => {
    Alert.alert(
      "Confirm Purchase",
      `Are you sure you want to buy a ${item.name}? This will cost ${-item.effects.cost} dollars.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Buy",
          onPress: () => {
            modifyStats({
              happy: item.effects.happy,
              health: item.effects.health,
              smart: item.effects.smart,
              look: item.effects.look
            });
            modifyBankBalance(item.effects.cost);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header text="Shopping"/>
      <View style={styles.content}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handlePurchase(item)}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemDetail}>Cost: ${-item.effects.cost}</Text>
          </TouchableOpacity>
        ))}
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
  item: {
    backgroundColor: '#ccc',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 14,
    color: '#2c3e50',
  },
});

export default Shop;
 