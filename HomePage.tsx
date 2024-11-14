import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type HomePageNavigationProp = StackNavigationProp<RootStackParamList, any>;

interface HomePageProps {
  navigation: HomePageNavigationProp;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/rest.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Christoffel Menu</Text>
        
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.linkText}>View Menu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Bill')}>
          <Text style={styles.linkText}>View Bill</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('ChefSection')}>
          <Text style={styles.linkText}>Chef Section</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.linkText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.linkText}>About Us</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366', 
  },
  linkButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%', // width
  },
  linkText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default HomePage;
