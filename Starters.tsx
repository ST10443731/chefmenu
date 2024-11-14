import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type StartersPageNavigationProp = StackNavigationProp<RootStackParamList, 'Starters'>;

interface StartersPageProps {
  navigation: StartersPageNavigationProp;
}

const startersData = [
  { name: 'Bruschetta', description: 'Grilled bread with tomato and basil', image: require('../assets/osso.jpg'), price: 8 },
  { name: 'Garlic Prawns', description: 'Prawns sautéed in garlic and butter', image: require('../assets/panna.jpg'), price: 12 },
  { name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs', image: require('../assets/elegant food1.jpg'), price: 10 },
  { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil', image: require('../assets/chef5.jpg'), price: 9 },
];

const StartersPage: React.FC<StartersPageProps> = () => {
  const navigation = useNavigation<StartersPageNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.headerButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Starters</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Text style={styles.headerButtonText}>Christoffel</Text>
        </TouchableOpacity>
      </View>

      {/* Starters  */}
      <ScrollView contentContainerStyle={styles.startersList}>
        {startersData.map((starter, index) => (
          <View key={index} style={styles.starterItem}>
            <Image source={starter.image} style={styles.starterImage} />
            <View style={styles.starterInfo}>
              <Text style={styles.starterName}>{starter.name}</Text>
              <Text style={styles.starterDescription}>{starter.description}</Text>
              <Text style={styles.starterPrice}>${starter.price.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a0f',
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
  startersList: {
    padding: 20,
  },
  starterItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#444', 
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,  
  },
  starterImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  starterInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  starterName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  starterDescription: {
    fontSize: 14,
    color: '#dddddd',
    marginVertical: 5,
  },
  starterPrice: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default StartersPage;
