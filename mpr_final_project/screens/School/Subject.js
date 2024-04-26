import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProgressBar = ({ progress, color }) => {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: color }]} />
        </View>
    );
};

const Subject = ({ route, navigation }) => {
    const { subjects = [], onCompleteStage } = route.params || {};
    const [subjectProgress, setSubjectProgress] = useState(subjects.map(() => 0));

    // Check if all subjects are completed and call onCompleteStage if they are
    useEffect(() => {
        if (subjectProgress.every(progress => progress === 100)) {
            onCompleteStage();  // This function should be passed from School.js to handle stage completion
        }
    }, [subjectProgress, onCompleteStage]);

    const handleStudy = (index) => {
        setSubjectProgress(currentProgress => {
            const newProgress = [...currentProgress];
            newProgress[index] = Math.min(newProgress[index] + 3, 100); // Increase by 3%, cap at 100%
            return newProgress;
        });
    };

    return (
        <View style={styles.container}>
            {subjects.map((subject, index) => (
                <View key={index} style={styles.subjectContainer}>
                    <Text style={styles.subjectText}>{subject}</Text>
                    <ProgressBar progress={subjectProgress[index]} color="#4caf50" />
                    <TouchableOpacity style={styles.studyButton} onPress={() => handleStudy(index)}>
                        <Text style={styles.buttonText}>Study</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    subjectContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    subjectText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e',
    },
    studyButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    progressBarContainer: {
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    progressBar: {
        height: '100%',
        borderRadius: 10,
    },
});

export default Subject;
