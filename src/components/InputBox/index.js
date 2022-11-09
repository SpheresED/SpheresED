import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("Sending a new message:", newMessage);

    setNewMessage("");
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign style={styles.plus} name="plus" size={24} color="skyblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="Type your message..."
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </SafeAreaView>
  );
};

export default InputBox;
