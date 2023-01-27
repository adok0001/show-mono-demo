import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../components/Styles';

const BroadcastScreen: React.FC = () => {
  const [streamTitle, setStreamTitle] = useState('');
  const [gameType, setGameType] = useState('Friendly');
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);

  const handleTitleChange = (title: string) => {
    setStreamTitle(title);
  }

  const handleGameTypeChange = (type: string) => {
    setGameType(type);
  }

  const handleCameraTypeChange = () => {
    setCameraType(
      cameraType === CameraType.back
        ? CameraType.front
        : CameraType.back
    );
  }

  const handleStartStream = () => {
    // Code to start the stream here
  }

  return (
    <View style={styles.container}>
          <TextInput 
            placeholder='Stream Title'
            placeholderTextColor="black"
            style={styles.textInput}
            value={streamTitle}
            onChangeText={handleTitleChange}
            />
          <Text style={styles.buttonText}>Game Type:</Text>
      <Picker
        selectedValue={gameType}
        onValueChange={handleGameTypeChange}
      >
        <Picker.Item label="Friendly" value="Friendly" />
        <Picker.Item label="Competitive" value="Competitive" />
      </Picker>
      <Button title="Start Stream" onPress={handleStartStream} />
    </View>
  );
};

export default BroadcastScreen;
