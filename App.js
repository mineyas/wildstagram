import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  CameraScreen  from "./screens/CameraScreen";
import  FeedScreen  from "./screens/FeedScreen";
import  ImagesScreen  from "./screens/ImagesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} options={{ unmountOnBlur: true }} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Images" component={ImagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
