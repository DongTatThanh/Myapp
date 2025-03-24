import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground 
        source={require('../../assets/images/SlapScreen1.jpg')} 
        style={styles.background}
      >
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Dừng chân an toàn </Text>
              <Text style={styles.subHeaderText}>Lên đường vững chắc</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Dịch vụ cho thuê tài xế</Text>
              <View style={styles.serviceContainer}>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Đặt chỗ')}>
                  <Icon name="car" type="font-awesome" size={60} />
                  <Text style={styles.serviceText}>Tài xế ô tô</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Đặt chỗ')}>
                  <Icon name="motorcycle" type="font-awesome" size={60} />
                  <Text style={styles.serviceText}>Tài xế xe máy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Đặt chỗ')}>
                  <Icon name="bicycle" type="font-awesome" size={60} />
                  <Text style={styles.serviceText}>Tài xế gia đình</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Các dịch vụ liên kết</Text>
              <View style={styles.serviceContainer}>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Xem thông tin đặt chỗ')}>
                  <Icon name="wrench" type="font-awesome" size={60} />
                  <Text style={styles.serviceText}>Đăng kiểm hộ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Xem thông tin đặt chỗ')}>
                  <Icon name="car" type="font-awesome" size={60} />
                  <Text style={styles.serviceText}>Lái xe kiêm bảo trì xe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Xem thông tin đặt chỗ')}>
                  <Icon name="phone" type="font-awesome" size={40} />
                  <Text style={styles.serviceText}>Cứu hộ 24/7</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(135, 127, 127)',
    marginTop: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#fff',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomeScreen;