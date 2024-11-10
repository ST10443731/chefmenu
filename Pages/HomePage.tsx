import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type HomePageNavigationProp = StackNavigationProp<RootStackParamList, any>;

interface HomePageProps {
  navigation: HomePageNavigationProp;
}

// Example menu items with prices
const menuItems = [
  { name: 'Starter 1', price: 5.5, course: 'Starters' },
  { name: 'Starter 2', price: 6.0, course: 'Starters' },
  { name: 'Main 1', price: 12.0, course: 'Maincourse' },
  { name: 'Main 2', price: 15.0, course: 'Maincourse' },
  { name: 'Dessert 1', price: 4.5, course: 'Desserts' },
  { name: 'Dessert 2', price: 5.0, course: 'Desserts' },
];

// Function to calculate average price for a given course
const calculateAveragePrice = (course: string) => {
  const filteredItems = menuItems.filter(item => item.course === course);
  const totalPrice = filteredItems.reduce((acc, item) => acc + item.price, 0);
  return filteredItems.length > 0 ? totalPrice / filteredItems.length : 0;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  // Calculate average prices for each course
  const avgStarters = calculateAveragePrice('Starters');
  const avgMaincourse = calculateAveragePrice('Maincourse');
  const avgDesserts = calculateAveragePrice('Desserts');

  return (
    <ImageBackground
      source={require('../assets/rest.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Christoffel Menu</Text>
        
        {/* Display average prices */}
        <Text style={styles.averageText}>Average Price for Starters: ${avgStarters.toFixed(2)}</Text>
        <Text style={styles.averageText}>Average Price for Main Courses: ${avgMaincourse.toFixed(2)}</Text>
        <Text style={styles.averageText}>Average Price for Desserts: ${avgDesserts.toFixed(2)}</Text>

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
  averageText: {
    fontSize: 18,
    marginBottom: 10,
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
