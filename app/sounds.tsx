import { Audio } from "expo-av";

const sound = new Audio.Sound();

export const playSound = async (soundUri: any) => {
  try {
    await sound.unloadAsync();
    await sound.loadAsync({ uri: soundUri });
    await sound.playAsync();
  } catch (error) {
    console.error("Error loading or playing sound:", error);
  }
};
