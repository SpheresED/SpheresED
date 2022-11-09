import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../src/screens/HomeScreen";
import SchoolsScreen from "../src/screens/SchoolsScreen";
import LibraryScreen from "../src/screens/LibraryScreen";
import ChatsScreen from "../src/screens/ChatsScreen";
import CourseScreen from "../src/screens/CourseScreen";
import TopicScreen from "../src/screens/TopicScreen";
import PresentationScreen from "../src/screens/PresentationScreen";
import InstitutionScreen from "../src/screens/InstitutionScreen";
import ChatScreen from "../src/screens/ChatScreen";
import Downloads from "../src/screens/Downloads";
import Notes from "../src/screens/Notes";
import Quizes from "../src/screens/Quizes";
import Blog from "../src/screens/Blog";

export default function Navigation() {
  return <RootNavigator />;
}

const RootStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="InstitutionScreen"
        component={InstitutionScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="TopicScreen"
        component={TopicScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="PresentationScreen"
        component={PresentationScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="ChatScreen" component={ChatScreen} />

      <RootStack.Screen name="Downloads" component={Downloads} />

      <RootStack.Screen name="Notes" component={Notes} />

      <RootStack.Screen name="Quizes" component={Quizes} />

      <RootStack.Screen name="Blog" component={Blog} />
    </RootStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="DefaultHome"
      screenOptions={{
        tabBarActiveTintColor: "#002F47",
        tabBarInactiveTintColor: "lightgray",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#F0FAFF",
          height: 60,
        },
        tabBarItemStyle: { padding: 5 },
      }}
    >
      <BottomTab.Screen
        name="DefaultHomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Fontisto name="home" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Schools"
        component={SchoolsScreen}
        options={{
          title: "Institutions",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-school" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: "Communities",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-sharp" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-library-sharp" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
