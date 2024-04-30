import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from '../../components/layout/Header';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useStats } from '../../store/StatContext'; // Ensure this is correctly imported

const Assert = ({ navigation }) => {
  const { modifyStats, modifyBankBalance } = useStats();

  const handleBuyStocks = () => {
    modifyBankBalance(-10000); // Assume buying stocks costs $10,000
    Alert.alert('Buy Stocks', 'You invested $10,000 in the stock market.');
  };

  const handlePurchaseProperty = () => {
    modifyBankBalance(-200000); // Assume buying property costs $200,000
    modifyStats({ happy: +10, smart: +5, happy: +1, look: +2 }); // Buying property increases happiness and smartness
    Alert.alert('Purchase Property', 'You bought a property for $200,000.');
  };

  const handleInvestInBusiness = () => {
    modifyBankBalance(-50000); // Assume investing in a business costs $50,000
    modifyStats({ health: -10, smart: +15, happy: +0, look: +0 }); // Investing in a business increases smartness
    Alert.alert('Invest in Business', 'You invested $50,000 in a business.');
  };

  const handleSellProperty = () => {
    modifyBankBalance(+150000); // Assume selling property gains $150,000
    Alert.alert('Sell Property', 'You sold a property and gained $150,000.');
  };

  return (
    <View style={styles.container}>
      <Header text="Assets"/>
      <View style={styles.content}>
        <PrimaryButton onPress={handleBuyStocks} text="Buy Stocks"/>
        <PrimaryButton onPress={handlePurchaseProperty} text="Purchase Property"/>
        <PrimaryButton onPress={handleInvestInBusiness} text="Invest in Business"/>
        <PrimaryButton onPress={handleSellProperty} text="Sell Property"/>
        <PrimaryButton onPress={() => navigation.navigate('PartJob')} text="Part-Time Job"/>
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
});

export default Assert;
