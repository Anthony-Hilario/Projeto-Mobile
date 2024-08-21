import { StatusBar, Text, View, Image, TextInput, StyleSheet } from "react-native";
import { styles } from "@/styles/styles";
import { Camera, useCameraPermission, useCameraDevice } from 'react-native-vision-camera';
import React, { useRef } from "react";

export default function CameraScreen() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const cameraRef = useRef<Camera>(null);
  if(!device || device == null) return <View></View>

  return (
    <View style={styles.container} >
        <Camera
            style={StyleSheet.absoluteFill}
            ref={cameraRef}
            device={device}
            isActive={true}
            resizeMode="cover"
        />

        <StatusBar barStyle={'dark-content'} hidden />
    </View>
  );
}
