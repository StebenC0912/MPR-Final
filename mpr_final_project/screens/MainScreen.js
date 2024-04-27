import React, { useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Make sure to install these or use similar icons available to you
import { useStats } from '../store/StatContext';

const ProgressBar = ({ progress, color }) => {
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: color }]} />
      </View>
    );
  };
  
  const MainScreen = ({ navigation, route }) => {
    const { stats, modifyStats, modifyBankBalance } = useStats();
    const [age, setAge] = useState(0);
    const [progress, setProgress] = useState(0);
    const { name } = route.params;

    useEffect(() => {
      const interval = setInterval(() => {
          setProgress(prevProgress => {
              if (prevProgress >= 100) {
                  incrementAge();
                  return 0;
              }
              return prevProgress + 100 / (12 * 60);
          });
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  // Use a callback to increment age to encapsulate the condition checking
  const incrementAge = useCallback(() => {
      setAge(prevAge => {
          const newAge = prevAge + 1;
          // Move the side effects to an effect hook
          if (newAge > 35) {
              // Delay this update to the next effect cycle
              requestAnimationFrame(() => {
                  modifyStats({ health: -2 });
              });
          }
          return newAge;
      });
  }, [modifyStats]);

  const handleIncreaseAge = () => {
      incrementAge();
  };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Life</Text>
            </View>
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/54/72/d1/5472d1b09d3d724228109d381d617326.jpg' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>{name}</Text>
                <Text style={styles.Age}>Age: {age}</Text> 
                <Text style={styles.bankBalance}>Bank Balance: ${stats.bankBalance}</Text>
            </View>
            <View style={styles.timeBarContainer}>
                <ProgressBar progress={progress} color="#3498db" />
            </View>
            <View style={styles.statsSection}>
                <Text style={styles.statLabel}>Happy: {stats.happy}%</Text>
                <ProgressBar progress={stats.happy} color="#ffeb3b" />
                <Text style={styles.statLabel}>Health: {stats.health}%</Text>
                <ProgressBar progress={stats.health} color="#4caf50" />
                <Text style={styles.statLabel}>Smart: {stats.smart}%</Text>
                <ProgressBar progress={stats.smart} color="#2196f3" />
                <Text style={styles.statLabel}>Looks: {stats.look}%</Text>
                <ProgressBar progress={stats.look} color="#e91e63" />
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('School')}>
                    <FontAwesome5 name="school" size={24} color="white" />
                    <Text style={styles.navText}>School</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Assert')}>
                    <FontAwesome5 name="dollar-sign" size={24} color="white" />
                    <Text style={styles.navText}>Bank</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={handleIncreaseAge}>
                    <FontAwesome5 name="plus" size={24} color="white" />
                    <Text style={styles.navText}>Age</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Relationship')}>
                    <FontAwesome5 name="user-friends" size={24} color="white" />
                    <Text style={styles.navText}>Relationship</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Activity')}>
                    <FontAwesome5 name="briefcase" size={24} color="white" />
                    <Text style={styles.navText}>Jobs</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9', // Adjust the background color
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Add border color
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue', // Set the title color
  },
  
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Set to a light background
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileDetail: {
    fontSize: 12,
    color: '#6d6d6d',
  },
  bankBalance: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
    marginLeft: 'auto', // Push to the right
  },
  
  detailsSection: {
    padding: 15,
    backgroundColor: '#f0f8ff', // A light blue background
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Light grey border
  },
  timeBarContainer: {
    height: 20, // Set the height for the time progress bar container
    width: '100%', // Set the width to full container width
    backgroundColor: '#ddd', // A light background color for the progress bar background
},
  statsSection: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    marginTop: 200
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  statLabel: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
    width: 50, // Width set to maintain label alignment
  },
  progressBarContainer: {
    height: 20,
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden', // Ensures the inner bar doesn't spill over
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 210,
    paddingVertical: 10,
    backgroundColor: '#3498db', // Adjust to the color in the image
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    marginBottom: 5,
  },
  navText: {
    fontSize: 10,
    color: '#ffffff', // Set text color to white
  },
  
});

export default MainScreen;
