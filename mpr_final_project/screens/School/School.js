import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary
import Header from '../../components/layout/Header';
import { ScrollView } from 'react-native-gesture-handler';

const School = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [schools, setSchools] = useState([
    {
      name: 'Elementary School',
      subjects: ['Math', 'Literature', 'English'],
      completed: [false, false, false],
      isCompleted: false
    },
    {
      name: 'Middle School',
      subjects: ['Math', 'Literature', 'English', 'Science'],
      completed: [false, false, false, false],
      isCompleted: false
    },
    {
      name: 'High School',
      subjects: ['Math', 'Literature', 'English', 'Science', 'Social Studies'],
      completed: [false, false, false, false, false],
      isCompleted: false
    },
    {
      name: 'University',
      subjects: ['Computer Science Principles', 'Programming', 'Philosophy'],
      completed: [false, false, false],
      isCompleted: false
    },
    {
      name: 'PhD',
      subjects: ['Advanced Research', 'Thesis Writing'],
      completed: [false, false],
      isCompleted: false
    },
    {
      name: 'Professor',
      subjects: ['Teaching', 'Research', 'Public Speaking'],
      completed: [false, false, false],
      isCompleted: false
    }
  ]);

  useEffect(() => {
    const fetchCurrentLevel = async () => {
      try {
        const storedLevel = await AsyncStorage.getItem('currentLevel');
        if (storedLevel !== null) {
          setCurrentLevel(parseInt(storedLevel));
        }
      } catch (error) {
        console.error('Failed to fetch the current level from storage', error);
      }
    };

    fetchCurrentLevel();
  }, []);

  useEffect(() => {
    const saveCurrentLevel = async () => {
      try {
        await AsyncStorage.setItem('currentLevel', currentLevel.toString());
      } catch (error) {
        console.error('Failed to save the current level to storage', error);
      }
    };

    saveCurrentLevel();
  }, [currentLevel]);
  const handleSubjectPress = (schoolIndex, subjectIndex) => {
    const updatedSchools = [...schools];
    updatedSchools[schoolIndex].completed[subjectIndex] = true;

    const isLevelCompleted = updatedSchools[schoolIndex].subjects.every(
      (_, index) => updatedSchools[schoolIndex].completed[index]
    );

    if (isLevelCompleted) {
      updatedSchools[schoolIndex].isCompleted = true;
      if (schoolIndex < schools.length - 1) {
        setCurrentLevel(schoolIndex + 1);
        updatedSchools[schoolIndex + 1].isCompleted = true;
      }
    }

    setSchools(updatedSchools);
  };

  return (
    <View style={styles.container}>
      <Header text="School"/>
      <ScrollView style={styles.content}>
        {schools.map((school, schoolIndex) => (
          (school.isCompleted || schoolIndex === currentLevel) && (
            <View key={schoolIndex} style={styles.schoolContainer}>
              <Text style={styles.schoolName}>{school.name}</Text>
              {school.subjects.map((subject, subjectIndex) => (
                <TouchableOpacity
                  key={subjectIndex}
                  style={[
                    styles.subjectButton,
                    { backgroundColor: school.completed[subjectIndex] ? '#4CAF50' : '#3498db' }
                  ]}
                  onPress={() => handleSubjectPress(schoolIndex, subjectIndex)}
                  disabled={school.completed[subjectIndex]}
                >
                  <Text style={styles.subjectButtonText}>{subject}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
          )
        ))}
      </ScrollView><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Job', { currentLevel })}>
          <Text style={styles.buttonText}>Check Job Opportunities</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  content: {
    padding: 20,
  },
  schoolContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',  // White background for cards
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subjectButton: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#3498db',
  },
  subjectButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#34c8db',  // Slightly different button color to stand out
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default School;
