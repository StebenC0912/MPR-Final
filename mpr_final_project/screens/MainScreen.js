import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  FlatList,
  Button,
} from "react-native";
import { useStats } from "../store/StatContext";
import { starterPack, randomEvent } from "../data/test";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import ProgressBar from "../components/layout/ProgressBar";
import NavigationButton from "../components/ui/NavigationButton";
import StatContent from "../components/layout/StatContent";
import { color } from "../constants/color";
import DailyLogin from "./DailyLogin";

const MainScreen = ({ navigation, route }) => {
  const [dataEvent, setDataEvent] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showSchoolAndRelationship, setShowSchoolAndRelationship] =
    useState(false);
  const [showRemaining, setShowRemaining] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const uid = route.params.id;
  const eventId = route.params.eventId;
  const db = getFirestore();

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const { stats, incrementAge, dispatch } = useStats();
  const { name } = route.params;

  useEffect(() => {
    if (stats.age >= 5 && !showSchoolAndRelationship) {
      Alert.alert(
        "Unlock new features",
        "School and Relationship features are now unlocked!",
        [{ text: "OK", onPress: () => setShowSchoolAndRelationship(true) }]
      );
    }
    if (stats.age >= 18 && !showRemaining) {
      Alert.alert(
        "Unlock new features",
        "Assert and Activity features are now unlocked!",
        [{ text: "OK", onPress: () => setShowRemaining(true) }]
      );
      Alert.alert("Check your bank balance", "Your parents give you $10,000!", [
        { text: "OK", onPress: () => setShowRemaining(true) },
      ]);
    }
  }, [stats.age]);

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
  const event = chooseRandomEvent();
  const handleIncreaseAge = async () => {
    incrementAge(); // Ensure this function is compatible with your state management
    const event = chooseRandomEvent();
    if (event) {
      dispatch({
        type: "MODIFY_STATS",
        payload: event.effects,
      });
      setDataEvent((prevDataEvent) => [
        ...prevDataEvent,
        { events: [event], id: stats.age + 1 },
      ]);
    }
    setEvents((prevEvents) => [...prevEvents, event.id]);
    await updateDoc(doc(db, "events", eventId), {
      events: events, // Update with the new dataEvent
    });
    console.log("Document updated successfully");
  };

  useEffect(() => {
    const secondTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / (12 * 60); // Increment by the fraction per second
        if (newProgress >= 100) {
          incrementAge(); // Use incrementAge from context to update age
          return 0; // Reset progress
        }
        return newProgress;
      });
    }, 1000); // Update every second

    return () => clearInterval(secondTimer); // Clean up the interval on component unmount
  }, [incrementAge]); // Include incrementAge in the dependency array

  useEffect(() => {
    if (stats.health <= 0 || stats.happy <= 0) {
      // Hiển thị cảnh báo hoặc thông báo về sự kết thúc của trò chơi
      Alert.alert(
        "Game Over",
        "Your character has died due to " +
          (stats.health <= 0 ? "poor health." : "unhappiness."),
        [
          {
            text: "View Score",
            onPress: () => navigation.navigate("EndGame", { uid: uid }), // Giả sử bạn đã thiết lập màn hình EndGame trong định tuyến của mình
          },
        ],
        { cancelable: false }
      );
    }
  }, [stats.health, stats.happy, navigation]);
  useEffect(() => {
    const fetchData = async () => {
      // Initialize newDataEvent array
      let newDataEvent = [];

      // Populate newDataEvent with starterPack events grouped by age
      starterPack.forEach((event) => {
        const age = event.age;
        const index = newDataEvent.findIndex((element) => element.id === age);
        if (index === -1) {
          newDataEvent.push({ id: age, events: [event] });
        } else {
          newDataEvent[index].events.push(event);
        }
      });

      // Set initial dataEvent state with newDataEvent
      setDataEvent(newDataEvent);

      // Fetch events from Firestore
      const docRef = doc(db, "events", eventId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        console.log("Document data:", data.events);
        setEvents(data.events);
        console.log("Events", data.events);
        // Increment age for each event fetched
        for (const index of data.events) {
          incrementAge();

          // Retrieve current event from randomEvent based on index
          const eventCurrent = randomEvent.find((event) => event.id === index);
          const age = eventCurrent.age;

          // Update newDataEvent with new event
          const i = newDataEvent.findIndex((element) => element.id === age);
          if (i === -1) {
            newDataEvent.push({ id: age, events: [eventCurrent] });
          } else {
            newDataEvent[i].events.push(eventCurrent);
          }

          // Dispatch event effects to modify stats
          dispatch({
            type: "MODIFY_STATS",
            payload: eventCurrent.effects,
          });
        }
        console.log("DataEvent", newDataEvent);

        console.log("DataEvent", newDataEvent);
      } else {
        console.log("No such document!");
      }
    };

    console.log("Fetching data...");
    fetchData(); // Call the async function
  }, []);
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
        <View style={styles.bankBalance}>
          <Text>Bank Balance: ${stats.bankBalance}</Text>
          <DailyLogin />
        </View>
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
        <ProgressBar progress={progress} color={color.colors.blue} />
      </View>
      <View style={styles.statsSection}>
        <StatContent
          color={color.colors.yellow}
          label="Happy"
          progress={stats.happy}
          iconName="mood"
          iconSize={20}
          iconColor={color.colors.darkYellow}
        />
        <StatContent
          color={color.colors.green}
          label="Health"
          progress={stats.health}
          iconName="favorite"
          iconSize={20}
          iconColor={color.colors.red}
        />
        <StatContent
          color={color.colors.blue}
          label="Smart"
          progress={stats.smart}
          iconName="lightbulb"
          iconSize={20}
          iconColor={color.colors.blue}
        />
        <StatContent
          color={color.colors.pink}
          label="Looks"
          progress={stats.look}
          iconName="face"
          iconSize={20}
          iconColor={color.colors.lightPink}
        />
      </View>
      <View style={styles.navBar}>
        {showSchoolAndRelationship && (
          <>
            <NavigationButton
              icon="school"
              text="School"
              onPress={() => navigation.navigate("School")}
            />
            <NavigationButton
              icon="user-friends"
              text="Relationship"
              onPress={() => navigation.navigate("Relationship")}
            />
          </>
        )}
        <NavigationButton icon="plus" text="Age" onPress={handleIncreaseAge} />
        {showRemaining && (
          <>
            <NavigationButton
              icon="dollar-sign"
              text="Assert"
              onPress={() => navigation.navigate("Assert")}
            />
            <NavigationButton
              icon="briefcase"
              text="Activities"
              onPress={() => navigation.navigate("Activity")}
            />
          </>
        )}
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
    backgroundColor: "#f0f8ff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    flex: 1,
    flexGrow: 1,
  },
  timeBarContainer: {
    height: 20,
    width: "100%",
    backgroundColor: "#ddd",
  },
  statsSection: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#3498db",
  },
});
export default MainScreen;
