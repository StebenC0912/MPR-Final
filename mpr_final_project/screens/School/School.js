import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStats } from '../../store/StatContext'; // Adjust the path as necessary
import Header from '../../components/layout/Header';

const School = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [schools, setSchools] = useState([
    {
      name: 'Tiểu học',
      subjects: ['Toán', 'Văn', 'Anh'],
      completed: [false, false, false],
      isCompleted: false
    },
    {
      name: 'Trung học cơ sở',
      subjects: ['Toán', 'Văn', 'Anh', 'Khoa Học'],
      completed: [false, false, false, false],
      isCompleted: false
    },
    {
      name: 'Trung học phổ thông',
      subjects: ['Toán', 'Văn', 'Anh', 'Khoa Học', 'Xã hội'],
      completed: [false, false, false, false, false],
      isCompleted: false
    },
    {
      name: 'Đại học',
      subjects: ['Nguyên lí máy tính', 'Lập Trình', 'Triết học'],
      completed: [false, false, false],
      isCompleted: false
    },
  ]);

  useEffect(() => {
    retrieveLevel();
  }, []);

  useEffect(() => {
    saveLevel();
  }, [currentLevel]);

  const retrieveLevel = async () => {
    try {
      const level = await AsyncStorage.getItem('currentLevel');
      if (level !== null) {
        setCurrentLevel(parseInt(level));
      }
    } catch (error) {
      console.error('Error retrieving saved level: ', error);
    }
  };

  const saveLevel = async () => {
    try {
      await AsyncStorage.setItem('currentLevel', currentLevel.toString());
    } catch (error) {
      console.error('Error saving level: ', error);
    }
  };

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
      <View style={styles.content}>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Job', { currentLevel })}>
          <Text style={styles.buttonText}>Check Job Opportunities</Text>
        </TouchableOpacity>
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
  schoolContainer: {
    marginBottom: 20,
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subjectButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  subjectButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default School;
