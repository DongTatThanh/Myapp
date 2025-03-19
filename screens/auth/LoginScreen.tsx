import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <ImageBackground 
      source={require('../../assets/images/logo1.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Nhập email hoặc số điện thoại" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Mật khẩu" 
          secureTextEntry 
        />
        <Button 
          title='Login' 
          onPress={async () => await AsyncStorage.setItem('assetToken', 'dghjk')} 
          color="#000"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 402,
    height: 873,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;