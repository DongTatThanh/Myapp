import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Share,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type BookingConfirmationScreenRouteProp = RouteProp<RootStackParamList, 'BookingConfirmationScreen'>;

const BookingConfirmationScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<BookingConfirmationScreenRouteProp>();
  const { 
    spotId, 
    bookingCode,
    userName,
    phone,
    bookingTime, 
    ticketType,
    expiryTime,
    totalAmount
  } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Thông tin đặt chỗ đỗ xe của tôi:
Mã đặt chỗ: ${bookingCode}
Vị trí: ${spotId}
Hạn sử dụng: ${expiryTime}
Cảm ơn bạn đã sử dụng dịch vụ TÌM BÃI NHANH!`,
      });
    } catch (error) {
      console.log('Error sharing booking details');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Xác nhận đặt chỗ</Text>
        <Text style={styles.headerSubtitle}>Cảm ơn bạn đã sử dụng dịch vụ!</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.bookingStatusContainer}>
            <View style={styles.bookingStatusIcon}>
              <Text style={styles.bookingStatusIconText}>✓</Text>
            </View>
            <Text style={styles.bookingStatusText}>Đặt chỗ thành công!</Text>
            <Text style={styles.bookingCodeText}>Mã đặt chỗ: {bookingCode}</Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Thông tin khách hàng</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Họ và tên:</Text>
              <Text style={styles.infoValue}>{userName}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Số điện thoại:</Text>
              <Text style={styles.infoValue}>{phone}</Text>
            </View>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Chi tiết đặt chỗ</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Vị trí đỗ xe:</Text>
              <Text style={styles.infoValue}>{spotId}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Thời gian đặt:</Text>
              <Text style={styles.infoValue}>{bookingTime}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Loại vé:</Text>
              <Text style={styles.infoValue}>{ticketType}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Hạn sử dụng:</Text>
              <Text style={styles.infoValue}>{expiryTime}</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.infoRow}>
              <Text style={styles.totalLabel}>Tổng thanh toán:</Text>
              <Text style={styles.totalValue}>{totalAmount.toLocaleString()} VND</Text>
            </View>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Hướng dẫn</Text>
            <Text style={styles.instructionsText}>
              • Vui lòng đến đúng giờ để đảm bảo chỗ đỗ xe của bạn.{'\n'}
              • Xuất trình mã QR tại barie vào bãi đỗ xe.{'\n'}
              • Liên hệ hotline 1900-1234 nếu cần hỗ trợ.
            </Text>
          </View>
          
          <View style={styles.actionsContainer}>
            <TouchableOpacity 
              style={styles.shareButton}
              onPress={handleShare}
            >
              <Text style={styles.shareButtonText}>Chia sẻ thông tin đặt chỗ</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.homeButton}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.homeButtonText}>Về trang chủ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
    header: {
      padding: 16,
      paddingTop: 24,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 16,
      color: '#666',
    },
    content: {
      padding: 16,
    },
    bookingStatusContainer: {
      alignItems: 'center',
      marginBottom: 24,
      marginTop: 8,
    },
    bookingStatusIcon: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: '#10b981',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    bookingStatusIconText: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
    },
    bookingStatusText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    bookingCodeText: {
      fontSize: 16,
      color: '#666',
    },
    infoCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    infoCardTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 16,
      color: '#333',
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    infoLabel: {
      fontSize: 15,
      color: '#555',
    },
    infoValue: {
      fontSize: 15,
      fontWeight: '500',
      color: '#333',
      textAlign: 'right',
    },
    divider: {
      height: 1,
      backgroundColor: '#eee',
      marginVertical: 12,
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    totalValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10b981',
    },
    instructionsText: {
      fontSize: 14,
      lineHeight: 22,
      color: '#555',
    },
    actionsContainer: {
      marginTop: 8,
      marginBottom: 24,
    },
    shareButton: {
      backgroundColor: '#f0f9ff',
      borderWidth: 1,
      borderColor: '#93c5fd',
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      marginBottom: 12,
    },
    shareButtonText: {
      color: '#3b82f6',
      fontSize: 16,
      fontWeight: '600',
    },
    homeButton: {
      backgroundColor: '#000',
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
    },
    homeButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
  export default BookingConfirmationScreen;