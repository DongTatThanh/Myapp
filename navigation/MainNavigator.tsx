import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigation';
import { LoginScreen } from '@/screens';
import ServicesScreen from '@/screens/booking/ServicesScreen';
import BookingScreen from '@/screens/booking/BookingScreen';
import BarkingLayoutScreen from '@/screens/booking/BarkingLayoutScreen';
import PaymentAddress from '@/screens/PaymentScreen';
import BookingConfirmationScreen from '@/screens/booking/BookingConfirmationScreen';
import HistoryScreen from '@/screens/screenBottomTab/HistoryScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="AuthNavigator" component={AuthNavigator}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      <Stack.Screen name='BookingScreen' component={BookingScreen}/>
      <Stack.Screen name='BarkingLayoutScreen' component={BarkingLayoutScreen}/>
      <Stack.Screen name = "PaymentScreen" component={PaymentAddress}/>
      <Stack.Screen name="BookingConfirmationScreen" component={BookingConfirmationScreen} />
    <Stack.Screen name='HistoryScreen' component={HistoryScreen}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;