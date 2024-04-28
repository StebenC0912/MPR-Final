import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../constants/color';

const Header = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.colors.darkBlue,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: color.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
