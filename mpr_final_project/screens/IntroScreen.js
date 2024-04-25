import React from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoGame}>
        <Image
            source={require('./../assets/images/vecteezy_woman-helping-friend-get-rid-of-depression-or-anxiety_13466398.jpg')}
            style={styles.image}
        />
        <Text style={{fontFamily: 'Meddon', fontSize: 35}}>New Life</Text>
        <Button
          title="Start"
          onPress={() =>
            navigation.navigate('authentication')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1C9D6',
    width: '100%'
  },
  image: {
    width: 342,
    height: 231
  },
  logoGame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default IntroScreen;
