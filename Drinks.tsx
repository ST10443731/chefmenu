import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type DrinksPageNavigationProp = StackNavigationProp<RootStackParamList, 'Drinks'>;

const drinksData = [
  { name: 'Mojito', description: 'Classic mojito with mint and lime', image: require('../assets/drink3.jpg'), price: 8 },
  { name: 'Pina Colada', description: 'Creamy pina colada with pineapple and coconut', image: require('../assets/r.jpg'), price: 10 },
  { name: 'Old Fashioned', description: 'Whiskey, bitters, and sugar', image: require('../assets/apple cide.jpg'), price: 12 },
  { name: 'Virgin Margarita', description: 'Non-alcoholic margarita with fresh lime', image: require('../assets/mojito.jpg'), price: 7 },
  { name: 'Mai Tai', description: 'A tropical blend of rum, lime, and almond syrup', image: require('../assets/drink1.jpg'), price: 11 },
  { name: 'Espresso Martini', description: 'A mix of vodka, espresso, and coffee liqueur', image: require('../assets/martini.jpg'), price: 13 },
  
];

const DrinksPage: React.FC = () => {
  const navigation = useNavigation<DrinksPageNavigationProp>();

  return (
    <ImageBackground
      source={require('../assets/drink5.jpg')} // background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.headerButtonText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Drinks</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Text style={styles.headerButtonText}>Christoffel</Text>
          </TouchableOpacity>
        </View>

        {/* Drinks List */}
        <ScrollView contentContainerStyle={styles.drinksList}>
          {drinksData.map((drink, index) => (
            <View key={index} style={styles.drinkItem}>
              <Image source={drink.image} style={styles.drinkImage} />
              <View style={styles.drinkInfo}>
                <Text style={styles.drinkName}>{drink.name}</Text>
                <Text style={styles.drinkDescription}>{drink.description}</Text>
                <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 26, 15, 0.8)', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(51, 51, 51, 0.8)', 
  },
  backButton: {
    padding: 10,
  },
  homeButton: {
    padding: 10,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  headerText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  drinksList: {
    padding: 20,
  },
  drinkItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(51, 51, 51, 0.8)', 
    borderRadius: 10,
    overflow: 'hidden',
  },
  drinkImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  drinkInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  drinkName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  drinkDescription: {
    fontSize: 14,
    color: '#dddddd',
    marginVertical: 5,
  },
  drinkPrice: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default DrinksPage;
