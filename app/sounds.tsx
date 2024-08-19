import { Audio } from "expo-av";

const sound = new Audio.Sound();

export const playSound = async () => {
  await sound.loadAsync(require('@/assets/sounds/panda.mp3'));
  await sound.playAsync();
};

export const songJoJo = async () => {
  await sound.loadAsync(require('@/assets/sounds/za-warudo.mp3'));
  await sound.playAsync();
}