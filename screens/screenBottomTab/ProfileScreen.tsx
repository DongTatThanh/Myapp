import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tài khoản</Text>
      </View>
      
      <ScrollView>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/SlapScreen1.jpg')}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Nguyễn Văn A</Text>
          <Text style={styles.userEmail}>nguyenvana@example.com</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Thông tin tài khoản</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🚗</Text>
            </View>
            <Text style={styles.menuText}>Thông tin xe</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>💳</Text>
            </View>
            <Text style={styles.menuText}>Thanh toán</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔒</Text>
            </View>
            <Text style={styles.menuText}>Đổi mật khẩu</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Cài đặt</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔔</Text>
            </View>
            <Text style={styles.menuText}>Thông báo</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🌙</Text>
            </View>
            <Text style={styles.menuText}>Giao diện</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔤</Text>
            </View>
            <Text style={styles.menuText}>Ngôn ngữ</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
        
        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>Phiên bản 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'black',
    padding: 16,
    paddingTop: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileSection: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#E1E1E1',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  menuSection: {
    backgroundColor: 'white',
    marginBottom: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    fontSize: 18,
    color: '#999',
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  versionInfo: {
    alignItems: 'center',
    padding: 20,
  },
  versionText: {
    color: '#999',
    fontSize: 14,
  },
});

export default ProfileScreen;
