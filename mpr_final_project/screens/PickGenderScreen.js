import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";

const PickGenderScreen = ({navigation, route}) => {
    const genderPickHandler = (gender) => {
        Alert.alert(`Picked ${gender}!`, 'Are you sure?', [
            {
                text: 'Pick again',
                style: 'cancel'
            },
            {
                text: 'Sure!'
            }
        ])
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.firstLine}>
                <Image
                    source={require('./../assets/images/earth.png')}
                    style={styles.image}
                />
                <Text style={styles.text1}>Become someone else in NewLife</Text>
            </View>
            <Text style={styles.text2}>Start picking a gender</Text>
            <View style={styles.maleButton}>
                <TouchableOpacity onPress={() => genderPickHandler('male')}>
                    <View style={styles.button1}>
                        <Image
                            source={require('./../assets/images/male.png')}
                            style={{
                                width: 16,
                                height: 16
                            }}
                        />
                        <Text style={{fontFamily: 'OrelegaOne', fontSize: 28, color: '#082F9F',paddingLeft: 5}}>Male</Text>
                    </View>
                </TouchableOpacity>    
            </View>
            <View style={styles.femaleButton}>
                <TouchableOpacity onPress={() => genderPickHandler('female')}>
                    <View style={styles.button2}>
                        <Image
                            source={require('./../assets/images/female.png')}
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />
                        <Text style={{fontFamily: 'OrelegaOne', fontSize: 28, color: '#082F9F'}}>Female</Text>
                    </View>
                </TouchableOpacity>    
            </View>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C1C9D6',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
        display: 'flex',
        width: 354, 
        height: 556,
        backgroundColor: '#D6EEF0',
    },
    firstLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        top: 50
    },
    image: {
        width: 28,
        height: 28
    },
    text1: {
        fontFamily: 'ChelseaMarket',
        fontSize: 16,
        color: '#FF6D60',
        paddingLeft: 5
    },
    text2: {
        fontFamily: 'ChelseaMarket',
        fontSize: 16,
        color: '#FF6D60',
        textAlign:'center',
        top: 80
    },
    button1: {
        flexDirection: 'row',
        height:70,
        width:320,
        backgroundColor: '#1DBA42',
        borderWidth: 7,
        borderColor: "#FFFFFF",
        borderRadius: 70,
        justifyContent: 'center',
        alignItems:'center'
    },
    button2: {
        flexDirection: 'row',
        height:70,
        width:320,
        backgroundColor: '#FCA9F7',
        borderWidth: 7,
        borderColor: "#FFFFFF",
        borderRadius: 70,
        justifyContent: 'center',
        alignItems:'center'
    },
    maleButton: {
        display: 'flex',
        alignItems: 'center',
        top: 150,
    },
    femaleButton: {
        display: 'flex',
        alignItems: 'center',
        top: 210,
    }
});

export default PickGenderScreen;