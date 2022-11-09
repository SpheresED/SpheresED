import { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Message from "../components/Message";

import messages from "../../data/messages.json";
import InputBox from "../components/InputBox";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 185}
      style={styles.bg}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
