import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage mới

import Header from '../../components/layout/Header';

const School = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(0); // State để lưu trữ cấp học hiện tại
  const [schools, setSchools] = useState([
    {
      name: 'Tiểu học',
      subjects: ['Toán', 'Văn', 'Anh'],
      completed: [false, false, false],
      isCompleted: false // Trạng thái hoàn thành của cấp học
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
    // Khi component được render, kiểm tra xem đã lưu trạng thái cấp học trước đó không
    retrieveLevel();
  }, []);

  useEffect(() => {
    // Mỗi khi currentLevel thay đổi, lưu trạng thái cấp học mới
    saveLevel();
  }, [currentLevel]);

  // Hàm lấy trạng thái cấp học từ AsyncStorage
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

  // Hàm lưu trạng thái cấp học vào AsyncStorage
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

    // Kiểm tra xem cấp học hiện tại đã hoàn thành chưa
    const isLevelCompleted = updatedSchools[currentLevel].subjects.every(
      (_, index) => updatedSchools[currentLevel].completed[index]
    );

    // Nếu đã hoàn thành, chuyển sang cấp học tiếp theo
    if (isLevelCompleted && currentLevel < schools.length - 1) {
      setCurrentLevel(currentLevel + 1);
      updatedSchools[currentLevel + 1].isCompleted = true;
    }

    setSchools(updatedSchools);
  };

  return (
    <View style={styles.container}>
      <Header text="School"/>
      <View style={styles.content}>
        {schools.map((school, schoolIndex) => (
          // Hiển thị chỉ các cấp học đã hoàn thành hoặc cấp học hiện tại
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
                >
                  <Text style={styles.subjectButtonText}>{subject}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )
        ))}
      </View>
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
  content: {
    flex: 1,
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
});

export default School;
