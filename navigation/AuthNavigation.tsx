import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, OnbroadingScreen } from '@/screens';
import { Ionicons } from '@expo/vector-icons';
import { globalStyyles } from '@/styles/globalStyles';
import { appColor } from '@/src/contants/appColors';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Onboarding" 
        component={OnbroadingScreen} 
      />
      <Stack.Screen 
        name="QR" 
        component={OnbroadingScreen} 
      />
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;