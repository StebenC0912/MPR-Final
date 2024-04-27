import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStats } from '../../store/StatContext'; // Ensure the import path is correct

const PartJob = ({ navigation }) => {
    const { modifyBankBalance } = useStats();

    const handleSelectJob = (amount) => {
        modifyBankBalance(amount);  // Update bank balance by the job's amount
        navigation.goBack();        // Optionally go back to the previous screen
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select a Part-Time Job</Text>
            </View>
            <TouchableOpacity style={styles.jobButton} onPress={() => handleSelectJob(100)}>
                <Text style={styles.jobText}>Cleaning Houses - Earn $100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.jobButton} onPress={() => handleSelectJob(200)}>
                <Text style={styles.jobText}>Babysitting - Earn $200</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        backgroundColor: '#34495e',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    jobButton: {
        backgroundColor: '#34495e', // Same button color as other screens
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff' // White border for visual consistency
    },
    jobText: {
        color: '#ffffff', // White text color for readability
        fontSize: 16,
    }
});

export default PartJob;
