import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );
};


const School = ({ navigation }) => {
    const [currentStage, setCurrentStage] = useState(0);
    const [progress, setProgress] = useState(0);

    const stages = [
        { level: "Elementary School", subjects: ["Mathematics", "Literature", "English"] },
        { level: "Middle School", subjects: ["Mathematics", "Literature", "English", "Science"] },
        { level: "High School", subjects: ["Mathematics", "Literature", "English", "Science", "Social Studies"] },
        { level: "University", subjects: ["Computer Principles", "Programming", "Philosophy"] }
    ];

    const incrementProgress = () => {
        const maxProgress = stages[currentStage].subjects.length;
        if (progress < maxProgress - 1) {
            setProgress(progress + 1);
        } else if (currentStage < stages.length - 1) {
            setCurrentStage(currentStage + 1);
            setProgress(0);
        }
    };

    // Function to handle completion of all subjects in the current stage
    const handleCompleteStage = () => {
        if (currentStage < stages.length - 1) {
            setCurrentStage(currentStage + 1);
            setProgress(0); // Reset progress for the new stage
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Current Educational Stage: {stages[currentStage].level}</Text>
            </View>
            <ProgressBar progress={(progress / stages[currentStage].subjects.length) * 100} color="#4caf50" />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Subject', {
                    subjects: stages[currentStage].subjects,
                    onCompleteStage: handleCompleteStage
                })}
            >
                <Text style={styles.buttonText}>Go to Subjects</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#ecf0f1',
  },
  header: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#ffffff', // Light background for the header
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '100%', // Full width to maintain consistency
      alignItems: 'center', // Center alignment for the text
  },
  headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#34495e',
      textAlign: 'center', // Center text for better readability
  },
  button: {
      padding: 10,
      backgroundColor: '#3498db',
      borderRadius: 5,
  },
  buttonText: {
      color: '#ffffff',
      fontSize: 16,
  },
});

export default School;
