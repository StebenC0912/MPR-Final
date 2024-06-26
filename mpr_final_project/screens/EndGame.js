import React from "react";
import { useStats } from "../store/StatContext";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
const EndGame = ({ navigation, route }) => {
  const { stats } = useStats();

  const db = getFirestore();
  const { uid } = route.params;

  const handleRestart = async () => {
    // Delete the character from Firestore
    try {
      const querySnapshot = await getDocs(collection(db, "characters"));
      querySnapshot.forEach((doc) => {
        const characterData = doc.data();
        // Check if the UID in the document matches the current user's UID
        if (characterData.uid === uid) {
          deleteDoc(doc.ref);
        }
      });
      console.log("Character deleted successfully!");
      const docSnap = await getDocs(collection(db, "events"));

      docSnap.forEach((doc) => {
        

        const eventData = doc.data();
        if (eventData.id === uid) {
          console.log(doc.id, "=>", doc.data());
          deleteDoc(doc.ref);
        }
      });
      console.log("Events deleted successfully!");
    } catch (error) {
      console.error("Error deleting character:", error.message);
    }
    navigation.navigate("Intro"); // Ensure this navigates to your start or intro screen
  };

  // Kiểm tra điều kiện chết
  const isDead =
    stats.happy <= 0 || stats.health <= 0 || stats.bankBalance < -10000;

  // Tạo biến để lưu thông điệp chết
  let deathMessage = "";

  // Xác định nguyên nhân của cái chết
  if (stats.happy <= 0) {
    deathMessage = "extreme unhappiness";
  } else if (stats.health <= 0) {
    deathMessage = "poor health";
  } else if (stats.bankBalance < -10000) {
    deathMessage = "overwhelming debt";
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/images/grave.png")}
        style={styles.image}
      />
      <Text style={styles.header}>Game Over</Text>
      {isDead ? (
        <>
          <Text style={styles.message}>
            Your journey ends here at age {stats.age}...
          </Text>
          <Text style={styles.details}>
            Your final moments were marked by {deathMessage}.
          </Text>
          <Text style={styles.stats}>
            Final Stats -{"\n"}- Health: {stats.health},{"\n"}- Happiness:{" "}
            {stats.happy},{"\n"}- Smarts: {stats.smart},{"\n"}- Looks:{" "}
            {stats.look}
          </Text>
          <Text style={styles.score}>
            Final Bank Balance: ${stats.bankBalance}
          </Text>
          <Button
            title="Start New Game"
            onPress={handleRestart}
            color="#1E90FF"
          />
        </>
      ) : (
        <Text style={styles.message}>Congratulations! You have survived!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#282c34",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700", // Màu vàng để nhấn mạnh
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 5,
  },
  stats: {
    fontSize: 16,
    color: "#ADFF2F", // Màu xanh vàng để hiển thị thông tin chỉ số
    marginBottom: 5,
  },
  score: {
    fontSize: 18,
    color: "#FF6347", // Màu cà chua để làm nổi bật tình trạng tài chính
    marginBottom: 20,
  },
});

export default EndGame;
