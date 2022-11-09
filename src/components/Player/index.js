import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

const Player = ({ props }) => {

  const [sound, setSound] = (useState < Sound) | (null > null);
  const [isPlaying, setIsPlaying] = useState < boolean > false;
  const [duration, setDuration] = (useState < number) | (null > null);
  const [position, setPosition] = (useState < number) | (null > null);
  const [isSeeking, setIsSeeking] = useState < boolean > false;
  const [shouldPlay, setShouldPlay] = useState < boolean > false;
  const [isLoading, setIsLoading] = useState < boolean > true;

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setIsLoading(status.isLoading);
    setShouldPlay(status.shouldPlay);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    setIsSeeking(status.isSeeking);
    
  };

  const loadNewSoundInstance = async (playing) => {
    if (sound != null) {
      await sound.unloadAsync();
    
    onPlaybackStatusUpdate
    setSound = null;
    }

    const source = { uri:props.uri }
    const initialStatus = {
        shouldPlay: playing
    };

    const { sound, status } = await Audio.Sound.createAsync(
        source,
        initialStatus,

        onPlaybackStatusUpdate
    );
    setSound = sound;
  };

  return (
    <View>
      <Text>Player</Text>
    </View>
  );
};

export default Player;
