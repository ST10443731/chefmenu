import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

type ContactPageNavigationProp = StackNavigationProp<RootStackParamList, 'Contact'>;

interface ContactPageProps {
  navigation: ContactPageNavigationProp;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/-5.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>

        {/* Contact Details */}
        <View style={styles.contactDetails}>
          <View style={styles.contactItem}>
            <FontAwesome name="map-marker" size={24} color="#003366" style={styles.icon} />
            <Text style={styles.contactText}>122 Christoffel Street, Foodville</Text>
          </View>

          <View style={styles.contactItem}>
            <MaterialIcons name="phone" size={24} color="#003366" style={styles.icon} />
            <Text style={styles.contactText}> 071-567-8901</Text>
          </View>

          <View style={styles.contactItem}>
            <MaterialIcons name="email" size={24} color="#003366" style={styles.icon} />
            <Text style={styles.contactText}>info@christoffelmenu.com</Text>
          </View>
        </View>

        {/* Back to Home Button */}
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.linkText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', //  opacity 
    borderRadius: 10,
    margin: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#003366', 
    textAlign: 'center',
  },
  contactDetails: {
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  contactText: {
    fontSize: 18,
    color: '#003366',
    flexShrink: 1,
  },
  linkButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%', 
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ContactPage;
