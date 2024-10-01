import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type DessertPageNavigationProp = StackNavigationProp<RootStackParamList, 'Desserts'>;

interface DessertPageProps {
  navigation: DessertPageNavigationProp;
}

const dessertItems = [
  { 
    name: 'Chocolate Fondant', 
    description: 'A rich and decadent chocolate cake with a gooey molten center, served warm with a scoop of vanilla ice cream.',
    image: require('../assets/dessert1.jpg'), 
    price: 10 
  },
  { 
    name: 'Lemon Tart', 
    description: 'A zesty and refreshing lemon tart with a buttery crust, topped with a light dusting of powdered sugar.', 
    image: require('../assets/Dessert2.jpg'), 
    price: 8 
  },
  { 
    name: 'Panna Cotta', 
    description: 'A creamy Italian dessert made with sweetened cream and vanilla, topped with blueberries.', 
    image: require('../assets/desset3.jpg'), 
    price: 7 
  },
  { 
    name: 'Blueberry Chocolate', 
    description: 'Cupcake features a rich, moist chocolate base infused with the vibrant sweetness of fresh blueberries.', 
    image: require('../assets/blue.jpg'), 
    price: 6 
  },
  { 
    name: 'Lemon Mouse', 
    description: 'Made with fresh lemon juice and zest, this creamy dessert of sweet and tangy.', 
    image: require('../assets/lemon.jpg'), 
    price: 6 
  },
  { 
    name: 'Chocolate Mouse', 
    description: 'Made from high-quality dark chocolate, this dessert boasts a luxuriously smooth texture that melts in your mouth.', 
    image: require('../assets/Choc.jpg'), 
    price: 6 
  },
];

const DessertPage: React.FC<DessertPageProps> = () => {
  const navigation = useNavigation<DessertPageNavigationProp>();

  return (
    <ImageBackground source={require('../assets/opera.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Head */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.headerButtonText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Desserts</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Text style={styles.headerButtonText}>Christoffel</Text>
          </TouchableOpacity>
        </View>

        {/* Dessert */}
        <ScrollView contentContainerStyle={styles.dessertsList}>
          {dessertItems.map((dessert, index) => (
            <View key={index} style={styles.dessertItem}>
              <Image source={dessert.image} style={styles.dessertImage} />
              <View style={styles.dessertInfo}>
                <Text style={styles.dessertName}>{dessert.name}</Text>
                <Text style={styles.dessertDescription}>{dessert.description}</Text>
                <Text style={styles.dessertPrice}>${dessert.price.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
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
    backgroundColor: '#333',
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
  dessertsList: {
    padding: 20,
  },
  dessertItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#444', 
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2, 
  },
  dessertImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dessertInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  dessertName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  dessertDescription: {
    fontSize: 14,
    color: '#dddddd',
    marginVertical: 5,
  },
  dessertPrice: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default DessertPage;
