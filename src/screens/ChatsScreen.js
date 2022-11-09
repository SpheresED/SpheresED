import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import chats from "../../data/chats.json";
import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingTop: 4 }}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem chat={item} style={{ backgroundColor: "white" }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;
