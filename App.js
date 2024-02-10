import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseConfigProvider } from "native-base";
import React from "react";
import VideoUploadScreen from "./Screens/VideoSelectionScreen";
import Preview from "./Screens/previewscreen";

const Stack = createStackNavigator();
const Render = () => {
  <Preview />;
};

const App = () => {
  return (
    <NativeBaseConfigProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="VideoUpload"
            component={VideoUploadScreen}
            options={{ title: "Upload Video" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseConfigProvider>
  );
};

export default Preview;
