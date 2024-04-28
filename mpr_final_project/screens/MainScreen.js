import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Make sure to install this or use similar icons available to you
import { useStats } from "../store/StatContext";
import { starterPack, randomEvent } from "../data/test";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
const ProgressBar = ({ progress, color }) => (
  <View style={styles.progressBarContainer}>
    <View
      style={[
        styles.progressBar,
        { width: `${progress}%`, backgroundColor: color },
      ]}
    />
  </View>
);

const MainScreen = ({ navigation, route }) => {
  const [dataEvent, setDataEvent] = useState([]);
  useEffect(() => {
    let newDataEvent = [];
    starterPack.forEach((event) => {
      const age = event.age;
      const index = newDataEvent.findIndex((element) => element.id === age);
      if (index === -1) {
        newDataEvent.push({ id: age, events: [event] });
      } else {
        newDataEvent[index].events.push(event);
      }
    });
    setDataEvent(newDataEvent);
  }, []);

  const { stats, modifyBankBalance, incrementTime } = useStats();
  const { name } = route.params;

  useEffect(() => {
    // This will now be managed within the StatContext, no need to duplicate here
  }, []);
  const dataEventByAge = useMemo(() => {
    const filteredEvents = randomEvent.filter(
      (event) => event.age === stats.age + 1
    );
    return filteredEvents;
  }, [randomEvent, stats.age]);

  const chooseRandomEvent = () => {
    if (dataEventByAge.length === 0) {
      return null; // Return null if there are no events for the current age
    }
    const randomIndex = Math.floor(Math.random() * dataEventByAge.length);
    return dataEventByAge[randomIndex];
  };
  const handleIncreaseAge = () => {
    incrementTime(12); // Add 12 minutes to time, which translates to one year
    if (dataEventByAge.length !== 0) {
      setDataEvent((prevDataEvent) => [
        ...prevDataEvent,
        { events: [chooseRandomEvent()], id: stats.age + 1 },
      ]);
    }

  };

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
          <Text style={styles.age}>Age: {stats.age}</Text>
        </View>

        <Text style={styles.bankBalance}>
          Bank Balance: ${stats.bankBalance}
        </Text>
      </View>
      <View style={styles.detailsSection}>
        <FlatList
          data={dataEvent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>{item.id} years old:</Text>
              <FlatList
                data={item.events}
                keyExtractor={(event) => event.id.toString()}
                renderItem={({ item: event }) => <Text>- {event.title}</Text>}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.timeBarContainer}>
        <ProgressBar progress={(stats.time % 12) * 8.33} color="#3498db" />
      </View>
      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Happy</Text>
          <ProgressBar progress={stats.happy} color="#ffeb3b" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Health</Text>
          <ProgressBar progress={stats.health} color="#4caf50" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Smart</Text>
          <ProgressBar progress={stats.smart} color="#2196f3" />
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Looks</Text>
          <ProgressBar progress={stats.look} color="#e91e63" />
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("School")}
        >
          <FontAwesome5 name="school" size={24} color="white" />
          <Text style={styles.navText}>School</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Assert")}
        >
          <FontAwesome5 name="dollar-sign" size={24} color="white" />
          <Text style={styles.navText}>Assert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleIncreaseAge}>
          <FontAwesome5 name="plus" size={24} color="white" />
          <Text style={styles.navText}>Age</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Relationship")}
        >
          <FontAwesome5 name="user-friends" size={24} color="white" />
          <Text style={styles.navText}>Relationship</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Activity")}
        >
          <FontAwesome5 name="briefcase" size={24} color="white" />
          <Text style={styles.navText}>Ac</Text>
        </TouchableOpacity>
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
