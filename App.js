import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  CameraScreen  from "./screens/CameraScreen";
import  FeedScreen  from "./screens/FeedScreen";
import  ImagesScreen  from "./screens/ImagesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Camera') {
            iconName = focused
              ? 'camera'
              : 'camera-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'ios-home' : 'home-outline';
          } else if (route.name === 'Images'){
            iconName = focused ? 'image' : 'image-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Camera" component={CameraScreen}options={{
          unmountOnBlur: true,
          tabBarLabel: 'Camera',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }} />
        <Tab.Screen name="Feed" component={FeedScreen} options={{
          tabBarLabel: 'Feed',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
        }} />
        <Tab.Screen name="Images" component={ImagesScreen} options={{
          tabBarLabel: 'Images',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }} />
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
