import { View, Image, TouchableOpacity, StyleSheet, ImageStyle, TextStyle, ViewStyle, Text } from 'react-native'
import React from 'react'
import { globalStyyles } from '@/styles/globalStyles';
import Swiper from 'react-native-swiper'
import { appInfos } from '../../src/constants/appInfos';
import { useNavigation } from '@react-navigation/native';
import { appColor } from '../../src/constants/appColors';

const OnbroadingScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('LoginScreen' as never);
  };

  return (
    <View style={[globalStyyles.container]}>
      <Swiper 
        style={[]} 
        showsButtons
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={styles.slide}>
          <Image 
            source={require('../../assets/images/SlapScreen3.jpg')} 
            style={styles.fullImage}
          />
        </View>

        <View style={styles.slide}>
          <Image 
            source={require('../../assets/images/SlapScreen2.jpg')} 
            style={styles.fullImage}
          />
        
        </View>

        <View style={styles.slide}>
          <Image 
            source={require('../../assets/images/SlapScreen1.jpg')} 
            style={styles.fullImage}
          />
            <TouchableOpacity 
            style={[globalStyyles.primaryButton, styles.loginButton]}
            onPress={handleNavigateToLogin}
          >
            <Text style={globalStyyles.primaryButtonText}>
              Đăng nhập ngay
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  } as ViewStyle,
  image: {
    width: appInfos.sizes.WIDTH,
    height: appInfos.sizes.HEIGHT,
    resizeMode: 'contain' as const,
  } as ImageStyle,
  fullImage: {
    width: appInfos.sizes.WIDTH,
    height: appInfos.sizes.HEIGHT,
    resizeMode: 'cover' as const,
  } as ImageStyle,
  loginButton: {
    position: 'absolute',
    bottom: 50,
    right: 25, // Added this line
    width: '86%',
    backgroundColor: 'black', // Changed this line
    borderRadius:30,
  } as ViewStyle,
  squareButton: {
    borderRadius: 40,
    position: 'absolute',
    bottom: 50,
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  } as ViewStyle,
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  } as ViewStyle,
  activeDot: {
    backgroundColor: appColor.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  } as ViewStyle,
});

export default OnbroadingScreen;