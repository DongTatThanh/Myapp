import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const { width } = Dimensions.get('window');

// Parking zones data
const parkingZones = [
  { id: "A", name: "Khu A", totalSpots: 50, availableSpots: 15 },
  { id: "B", name: "Khu B", totalSpots: 30, availableSpots: 8 },
  { id: "C", name: "Khu C", totalSpots: 45, availableSpots: 20 },
  { id: "D", name: "Khu D", totalSpots: 25, availableSpots: 3 },
  { id: "E", name: "Khu E", totalSpots: 35, availableSpots: 0 },
];

// Progress bar component
const ProgressBar: React.FC<{ progress: number, color: string }> = ({ progress, color }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View 
        style={[
          styles.progressBar, 
          { width: `${progress * 100}%`, backgroundColor: color }
        ]} 
      />
    </View>
  );
};

const BookingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  // Get today's date
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  
  const [selectedDate, setSelectedDate] = useState<string>(formattedDate);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          
          <Text  style={styles.headerTitle}>Đặt Chỗ</Text>
          <Text style={styles.headerSubtitle}>
            Chọn ngày và khu vực để đặt chỗ đỗ xe
          </Text>
        </View>
        
        <View style={styles.content}>
          {/* Date selection */}
          <View style={styles.dateSelectionCard}>
            <Text style={styles.sectionTitle}>Chọn ngày</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Ngày đặt chỗ</Text>
              <TouchableOpacity style={styles.dateInput}>
                <Text>{selectedDate}</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Giờ đặt chỗ</Text>
              <TouchableOpacity style={styles.dateInput}>
                <Text>08:00</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Parking zones */}
          <View style={styles.parkingZonesSection}>
            <Text style={styles.sectionTitle}>Chọn khu vực đỗ xe</Text>
            
            <View style={styles.zonesGrid}>
              {parkingZones.map((zone) => {
                // Calculate availability color
                let availabilityColor = '#10b981'; // green
                if (zone.availableSpots === 0) {
                  availabilityColor = '#ef4444'; // red
                } else if (zone.availableSpots < 10) {
                  availabilityColor = '#f59e0b'; // yellow
                }
                
                // Calculate occupancy rate as a number between 0 and 1
                const occupancyRate = (zone.totalSpots - zone.availableSpots) / zone.totalSpots;
                
                return (
                  <TouchableOpacity 
                    key={zone.id}
                    style={[
                      styles.zoneCard,
                      zone.availableSpots === 0 && styles.zoneCardDisabled
                    ]}
                    disabled={zone.availableSpots === 0}
                    onPress={() => navigation.navigate('ParkingLayout', { zoneId: zone.id })}
                  >
                    <View style={styles.zoneCardHeader}>
                      <Text style={styles.zoneName}>{zone.name}</Text>
                      <View 
                        style={[
                          styles.availabilityBadge, 
                          { backgroundColor: `${availabilityColor}20` }
                        ]}
                      >
                        <Text 
                          style={[
                            styles.availabilityText, 
                            { color: availabilityColor }
                          ]}
                        >
                          {zone.availableSpots > 0 
                            ? `${zone.availableSpots} chỗ trống`
                            : "Hết chỗ"
                          }
                        </Text>
                      </View>
                    </View>
                    <View style={styles.occupancyContainer}>
                      <ProgressBar 
                        progress={occupancyRate} 
                        color={availabilityColor} 
                      />
                      <Text style={styles.occupancyText}>
                        {zone.availableSpots}/{zone.totalSpots}
                      </Text>
                    </View>
                    
                    {zone.availableSpots > 0 ? (
                      <View style={styles.viewMapButton}>
                        <Text style={styles.viewMapText}>Xem sơ đồ</Text>
                        <Text style={styles.arrowIcon}>→</Text>
                      </View>
                    ) : (
                      <Text style={styles.noAvailabilityText}>
                        Khu vực hiện không có chỗ trống
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          
          {/* Information Section */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Thông tin hữu ích</Text>
            
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <View style={styles.infoIconContainer}>
                  <Text style={styles.infoIcon}>🕒</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoTitle}>Giờ hoạt động</Text>
                  <Text style={styles.infoText}>
                    Thứ Hai - Chủ Nhật: 6:00 - 22:00{'\n'}
                    Ngày lễ: 8:00 - 20:00
                  </Text>
                </View>
              </View>
              
              <View style={styles.infoItem}>
                <View style={styles.infoIconContainer}>
                  <Text style={styles.infoIcon}>💳</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoTitle}>Phương thức thanh toán</Text>
                  <Text style={styles.infoText}>
                    Chấp nhận thanh toán qua ví điện tử, thẻ tín dụng/ghi nợ và tiền mặt.
                  </Text>
                </View>
              </View>
              
              <View style={styles.infoItem}>
                <View style={styles.infoIconContainer}>
                  <Text style={styles.infoIcon}>📋</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoTitle}>Chính sách hủy</Text>
                  <Text style={styles.infoText}>
                    Miễn phí hủy đặt chỗ trước 2 giờ. Phí hủy 50% sau thời gian đó.
                  </Text>
                </View>
              </View>
              
              <View style={styles.infoItem}>
                <View style={styles.infoIconContainer}>
                  <Text style={styles.infoIcon}>📱</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoTitle}>Liên hệ hỗ trợ</Text>
                  <Text style={styles.infoText}>
                    Hotline: +84 123 456 789{'\n'}
                    Email: support@timbainha.vn
                  </Text>
                </View>
              </View>
            </View>
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
    paddingTop: 8,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#666',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    padding: 16,
  },
  dateSelectionCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  dateInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
  },
  parkingZonesSection: {
    marginBottom: 24,
  },
  zonesGrid: {
    flexDirection: 'column',
  },
  zoneCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  zoneCardDisabled: {
    backgroundColor: '#f9fafb',
    opacity: 0.8,
  },
  zoneCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  zoneName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  availabilityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: '500',
  },
  occupancyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  occupancyText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#666',
    minWidth: 50,
    textAlign: 'right',
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMapText: {
    color: '#3b82f6',
    fontSize: 14,
  },
  arrowIcon: {
    color: '#3b82f6',
    fontSize: 14,
    marginLeft: 4,
  },
  noAvailabilityText: {
    fontSize: 14,
    color: '#888',
  },
  infoSection: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoGrid: {
    flexDirection: 'column',
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0f2fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoIcon: {
    fontSize: 18,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default BookingScreen;