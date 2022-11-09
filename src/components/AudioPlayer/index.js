import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import Slider from "@react-native-community/slider";

const AudioPlayer = (props) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [didJustFinish, setDidJustFinish] = useState(false);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDidJustFinish(status.didJustFinish);
    setIsLoaded(status.isLoaded);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    setCurrentPosition(status.currentPosition);

    console.log(status);
  };

  const playCurrentSong = async () => {
    if (sound) {
      sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: props.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.pauseAsync();
        }
      : undefined;
  }, [sound]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const play = async () => {
    try {
      await sound.playAsync();
    } catch (error) {
      console.log("Play Function Error:", error);
    }
  };

  const pause = async () => {
    try {
      await sound.pauseAsync();
    } catch (error) {
      console.log("Pause Function Error:", error);
    }
  };

  const durationInSecs = duration / 1000;
  const positionInSecs = position / 1000;

  const convertTime = (minutes) => {
    if (minutes) {
      const hrs = minutes / 60;
      const minute = hrs.toString().split(".")[0];
      const percent = parseInt(hrs.toString().split(".")[1].slice(0, 2));
      const sec = Math.ceil((60 * percent) / 100);

      if (parseInt(minute) < 10 && sec < 10) {
        return `0${minute}:0${sec}`;
      }

      if (sec == 60) {
        return `${minute + 1}:00`;
      }
      if (parseInt(minute) < 10) {
        return `0${minute}:${sec}`;
      }
      if (sec < 10) {
        return `${minute}:0${sec}`;
      }
    }
  };

  const getDuration = () => {
    if (sound === null || duration === null || position === null) {
      return;
    }
    let durationTime = convertTime(duration);
    return durationTime;
  };

  const getPosition = () => {
    if (sound === null || duration === null || position === null) {
      return;
    }

    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    let seconds = Math.floor(position / 1000);
    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  };

  const calculateSeekBar = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return position / duration;
  };

  const renderCurrentTime = () => {
    return convertTime(positionInSecs);
  };

  return (
    <View style={styles.container}>
      <View>
        <Slider
          style={{ width: "100%", height: 15 }}
          minimumValue={0}
          maximumValue={1}
          value={calculateSeekBar() || 0}
          onValueChange={(value) => {
            setCurrentPosition(convertTime(value * durationInSecs));
          }}
          onSlidingStart={async () => {
            if (!isPlaying) return;

            try {
              await pause(sound);
            } catch (error) {
              console.log("error inside onSlidingStart callback", error);
            }
          }}
          //onSlidingComplete
          minimumTrackTintColor="#002F47"
          maximumTrackTintColor="gray"
          thumbTintColor="#002F47"
        />
        <View style={styles.timeStamp}>
          <Text style={styles.time}>
            {currentPosition ? currentPosition : renderCurrentTime()}
          </Text>
          <Text style={styles.time}>{convertTime(durationInSecs)}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.touch}>
              <EvilIcons name="question" size={25} color="#002F47" />
              <Text style={{ fontSize: 10, marginBottom: 4, color: "#002F47" }}>
                Ask
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPlayPausePress}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                borderWidth: 0.5,
                borderColor: "#CCEEFF",
                backgroundColor: "#002F47",
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  borderRadius: 50,
                  alignItems: "center",
                  paddingLeft: 4,
                }}
              >
                <Feather
                  name={isPlaying ? "pause" : "play"}
                  size={40}
                  color="#F0FAFF"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <EvilIcons name="archive" size={25} color="#002F47" />
              <Text style={{ fontSize: 10, marginBottom: 4, color: "#002F47" }}>
                Download
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AudioPlayer;
