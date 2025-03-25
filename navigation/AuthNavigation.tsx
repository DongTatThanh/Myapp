import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, OnbroadingScreen } from '@/screens';
import { Ionicons } from '@expo/vector-icons';
import { globalStyyles } from '@/styles/globalStyles';

import ForgetPasswordScreen from '@/screens/auth/ForgetPasswordScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';
import BookingScreen from '@/screens/booking/BookingScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
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
     <Stack.Screen 
     name="BookingScreen"
      component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
