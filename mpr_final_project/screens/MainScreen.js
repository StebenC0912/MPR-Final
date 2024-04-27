import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { starterPack } from "../data/test";
const ProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { width: `${progress}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
};

const MainScreen = ({ navigation, route }) => {
  let dataEvent = [];
  starterPack.forEach((event) => {
    const age = event.age;
    // Find the index of age in dataEvent
    const index = dataEvent.findIndex((element) => element.id === age);
    if (index === -1) {
      // If age does not exist, create a new entry
      dataEvent.push({ id: age, events: [event] });
    } else {
      // If age exists, push the event to existing entry
      dataEvent[index].events.push(event);
    }
  });
  const [age, setAge] = useState(0); // Initializing age state
  const [progress, setProgress] = useState(0);
  const { name } = route.params;
  const [bankBalance, setBankBalance] = useState(0);
  const [health, setHealth] = useState(100);
  const [happy, setHappy] = useState(100);
  const [smart, setSmart] = useState(30);
  const [look, setLook] = useState(20);

  useEffect(() => {
    const secondTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / (1 * 60); // Increment by the fraction per second
        if (newProgress >= 100) {
          setAge((prevAge) => prevAge + 1); // Increment age every 12 minutes
          return 0; // Reset progress after 12 minutes
        }
        return newProgress;
      });
    }, 1000); // Update every second

    return () => clearInterval(secondTimer); // Clean up the interval on component unmount
  }, []);

  const handleIncreaseAge = () => {
    setAge(age + 1); // Manual increment age
  };
  useEffect(() => {
    if (age > 35) {
      setHealth((prevHealth) => Math.max(0, prevHealth - 2));
    }
  }, [age]); // This effect triggers whenever 'age' changes

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Life</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/54/72/d1/5472d1b09d3d724228109d381d617326.jpg",
          }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.Age}>Age: {age}</Text>
        </View>

        <Text style={styles.bankBalance}>Bank Balance: ${bankBalance}</Text>
      </View>

      <View style={styles.detailsSection}>
        <FlatList
          data={dataEvent}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
            style={{
              marginBottom: 10,
            }}
            >
              <Text>{item.id} years old:</Text>
              <FlatList
                data={item.events}
                keyExtractor={(event) => event.id}
                renderItem={({ item: event }) => (
                  <Text key={event.id}>- {event.title}</Text>
                )}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.timeBarContainer}>
        <ProgressBar progress={progress} color="#3498db" />
      </View>
      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Happy</Text>
          <ProgressBar progress={happy} color="#ffeb3b" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Health</Text>
          <ProgressBar progress={health} color="#4caf50" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Smart</Text>
          <ProgressBar progress={smart} color="#2196f3" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Looks</Text>
          <ProgressBar progress={look} color="#e91e63" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9", // Adjust the background color
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0", // Add border color
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue", // Set the title color
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9", // Set to a light background
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileDetail: {
    fontSize: 12,
    color: "#6d6d6d",
  },
  bankBalance: {
    fontSize: 16,
    color: "#3498db",
    fontWeight: "bold",
    marginLeft: "auto", // Push to the right
  },

  detailsSection: {
    padding: 15,
    backgroundColor: "#f0f8ff", // A light blue background
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0", // Light grey border
    flex: 1,
    flexGrow: 1,
  },
  timeBarContainer: {
    height: 20, // Set the height for the time progress bar container
    width: "100%", // Set the width to full container width
    backgroundColor: "#ddd", // A light background color for the progress bar background
  },
  statsSection: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  statLabel: {
    fontSize: 16,
    color: "#000",
    marginRight: 5,
  },
  progressBarContainer: {
    height: 20,
    flex: 1,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden", // Ensures the inner bar doesn't spill over
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 210,
    paddingVertical: 10,
    backgroundColor: "#3498db", // Adjust to the color in the image
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    marginBottom: 5,
  },
  navText: {
    fontSize: 10,
    color: "#ffffff", // Set text color to white
  },
});

export default MainScreen;
