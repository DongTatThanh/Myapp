import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');

// Example special offers data
const specialOffers = [
  {
    id: '1',
    title: 'Ưu đãi khách hàng mới',
    description: 'Giảm 50% cho lần đặt chỗ đầu tiên của bạn',
    image: require('../assets/images/SlapScreen1.jpg'),
    discount: '50%',
    validUntil: '31/12/2023',
    code: 'NEWUSER50',
  },
  {
    id: '2',
    title: 'Ưu đãi cuối tuần',
    description: 'Giảm 30% cho đặt chỗ vào cuối tuần',
    image: require('../assets/images/SlapScreen1.jpg'),
    discount: '30%',
    validUntil: '31/12/2023',
    code: 'WEEKEND30',
  },
  {
    id: '3',
    title: 'Ưu đãi vé tháng',
    description: 'Giảm 20% khi đăng ký vé gửi xe tháng',
    image: require('../assets/images/SlapScreen1.jpg'),
    discount: '20%',
    validUntil: '31/12/2023',
    code: 'MONTHLY20',
  },
];

const SpecialOffersScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const handleSelectOffer = (offerId: string) => {
    setSelectedOffer(offerId === selectedOffer ? null : offerId);
  };

  const handleApplyOffer = (offerId: string) => {
    // Navigate to Booking screen with the offer ID
    navigation.navigate('InsuranceScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.header}>
      <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        <Text style={styles.headerTitle}>Ưu Đãi Đặc Biệt</Text>
        <Text style={styles.headerSubtitle}>Khám phá các ưu đãi hấp dẫn dành cho bạn</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {specialOffers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <Image source={offer.image} style={styles.offerImage} resizeMode="cover" />
            <View style={styles.offerBadge}>
              <Text style={styles.offerBadgeText}>{offer.discount}</Text>
            </View>
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
              <Text style={styles.offerDescription}>{offer.description}</Text>
              
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => handleSelectOffer(offer.id)}
              >
                <Text style={styles.detailsButtonText}>
                  {selectedOffer === offer.id ? 'Ẩn chi tiết' : 'Xem chi tiết'}
                </Text>
              </TouchableOpacity>
              
              {selectedOffer === offer.id && (
                <View style={styles.offerDetails}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Mã ưu đãi:</Text>
                    <View style={styles.codeContainer}>
                      <Text style={styles.codeText}>{offer.code}</Text>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Có hiệu lực đến:</Text>
                    <Text style={styles.detailValue}>{offer.validUntil}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.applyButton}
                    onPress={() => handleApplyOffer(offer.id)}
                  >
                    <Text style={styles.applyButtonText}>Áp Dụng Ngay</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        ))}
         <View style={styles.newCustomerSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Đặc Quyền Khách Hàng Mới</Text>
            <View style={styles.sectionDivider} />
          </View>
          
          <View style={styles.featuresContainer}>
            {[
              { icon: '🎁', title: 'Giảm 50% lần đầu', description: 'Áp dụng cho lần đặt chỗ đầu tiên' },
              { icon: '🔄', title: 'Hoàn tiền dễ dàng', description: 'Hủy đặt chỗ và nhận lại tiền trong 24h' },
              { icon: '⭐', title: 'Ưu tiên chỗ đậu xe', description: 'Vị trí ưu tiên cho khách hàng mới' },
              { icon: '📱', title: 'Hỗ trợ 24/7', description: 'Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn' },
            ].map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.registerButton}
          onPress={() => navigation.navigate('InsuranceScreen')}
        >
          <Text style={styles.registerButtonText}>Đăng Ký Ngay</Text>
        </TouchableOpacity>
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
    backgroundColor: '#333',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
  },
  scrollContent: {
    padding: 16,
  },
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  offerImage: {
    width: '100%',
    height: 180,
  },
  offerBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FF5722',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  offerBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  offerContent: {
    padding: 16,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  offerDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  detailsButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 0,
  },
  detailsButtonText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
  },
  offerDetails: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  codeContainer: {
    backgroundColor: '#FFE0D6',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFCDB9',
    borderStyle: 'dashed',
  },
  codeText: {
    color: '#FF5722',
    fontWeight: 'bold',
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '110000',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newCustomerSection: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionDivider: {
    width: 60,
    height: 3,
    backgroundColor: '#FF5722',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  featureItem: {
    width: (width - 48) / 2,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 24,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default SpecialOffersScreen;