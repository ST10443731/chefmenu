import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';

const BillPage: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  // Sample food items and their prices
  const foodItems = [
    { name: 'Chocolate Fondant', price: 10 },
    { name: 'Lemon Tart', price: 8 },
    { name: 'Panna Cotta', price: 7 },
  ];

  const calculateTotal = () => {
    const sum = foodItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
    // Corrected Alert message with template literals
    Alert.alert('Total Amount', `Your total bill is $${sum}.`, [{ text: 'OK' }]);
  };

  return (
    <ImageBackground
      source={require('../assets/bill.jpg')} // Update with your background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bill Page</Text>
        {foodItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={calculateTotal}>
          <Text style={styles.buttonText}>Calculate Total</Text>
        </TouchableOpacity>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366', // Dark blue color for the title
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white for better readability
    borderRadius: 8,
    shadowColor: '#000', // Shadow for elevation
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#333', // Dark color for item names
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF', // Blue color for prices
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#003366', // Dark blue color for total
  },
});

export default BillPage;
