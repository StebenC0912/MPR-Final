import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatContext } from '../../store/StatContext';  // Make sure this is the correct path to your StatContext

const ProgressBar = ({ progress, color }) => {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: color }]} />
        </View>
    );
};

const Subject = ({ route }) => {
    const { subjects = [], onCompleteStage } = route.params || {};
    const { modifyStats } = useContext(StatContext);  // Using StatContext to modify stats globally
    const [subjectProgress, setSubjectProgress] = useState(subjects.map(() => 0));

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
        modifyStats({ happy: 0, health: -1, smart: 5, look: -1 });  // Modifying stats according to the study action
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
