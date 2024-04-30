// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";

// const MessagingScreen = ({route}) => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const { person } = route.params;

//   const sendMessage = () => {
//     if (message.trim() !== "") {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: message, sender: "user" },
//       ]);
//       // Here, you may send the message to the server or handle it as per your application's logic
//       setMessage("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Messaging with {person.name}</Text>
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={
//               item.sender === "user"
//                 ? styles.userMessageContainer
//                 : styles.otherMessageContainer
//             }
//           >
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     padding: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#CCCCCC",
//     borderRadius: 5,
//     padding: 10,
//   },
//   sendButton: {
//     marginLeft: 10,
//     padding: 10,
//     backgroundColor: "#007BFF",
//     borderRadius: 5,
//   },
//   sendButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
//   userMessageContainer: {
//     alignSelf: "flex-end",
//     backgroundColor: "#DCF8C6",
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     maxWidth: "70%",
//   },
//   otherMessageContainer: {
//     alignSelf: "flex-start",
//     backgroundColor: "#EAEAEA",
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     maxWidth: "70%",
//   },
//   messageText: {
//     fontSize: 16,
//   },
// });

// export default MessagingScreen;


import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const MessagingScreen = ({ route }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { person } = route.params;

  useEffect(() => {
    loadMessages();
  }, [person]);

  useEffect(() => {
    // Save messages to AsyncStorage whenever messages state changes
    saveMessages();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem(`messages_${person.id}`);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const saveMessages = async () => {
    try {
      await AsyncStorage.setItem(`messages_${person.id}`, JSON.stringify(messages));
    } catch (error) {
      console.error("Error saving messages:", error);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Messaging with {person.name}</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={
              item.sender === "user"
                ? styles.userMessageContainer
                : styles.otherMessageContainer
            }
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  otherMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  messageText: {
    fontSize: 16,
  },
});

export default MessagingScreen;
