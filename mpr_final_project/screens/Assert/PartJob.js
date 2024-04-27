import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStats } from '../../store/StatContext'; // Going up two levels
 // Going up one level
 // Ensure this is correctly imported

const PartJob = ({ navigation }) => {
    const { modifyBankBalance } = useStats();

    const handleSelectJob = (amount) => {
        modifyBankBalance(amount);  // Update bank balance by the job's amount
        navigation.goBack();        // Optionally go back to the previous screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select a Part-Time Job</Text>
            <TouchableOpacity style={styles.jobButton} onPress={() => handleSelectJob(100)}>
                <Text>Cleaning Houses - Earn $100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.jobButton} onPress={() => handleSelectJob(200)}>
                <Text>Babysitting - Earn $200</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    jobButton: {
        backgroundColor: '#ededed',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center'
    }
});

export default PartJob;
