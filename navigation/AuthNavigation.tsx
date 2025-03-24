import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, OnbroadingScreen } from '@/screens';
import { Ionicons } from '@expo/vector-icons';
import { globalStyyles } from '@/styles/globalStyles';

import ForgetPasswordScreen from '@/screens/auth/ForgetPasswordScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Onboarding" 
        component={OnbroadingScreen} 
      />
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
      />
      <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen}
      /> 
      <Stack.Screen 
        name="ForgetPasswordScreen" 
        component={ForgetPasswordScreen}

      />
       <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen}

    />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
