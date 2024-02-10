import { Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { Button, Text, View } from "native-base";
import React, { useState } from "react";

const VideoUploadScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedVideo(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Select a Video</Text>
      <Button onPress={selectVideo}>
        <Text>Choose Video</Text>
      </Button>
      {selectedVideo && (
        <Video
          source={{ uri: selectedVideo }}
          style={{ width: 300, height: 300 }}
          useNativeControls
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default VideoUploadScreen;
