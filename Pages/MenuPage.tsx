import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type MenuPageNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

interface MenuPageProps {
  navigation: MenuPageNavigationProp;
}

const MenuPage: React.FC<MenuPageProps> = ({ navigation }) => {
  const menuItems = [
    { name: 'Starters', image: require('../assets/filet.jpg'), route: 'Courses' },
    { name: 'Main Course', image: require('../assets/chef5.jpg'), route: 'Courses' },
    { name: 'Desserts', image: require('../assets/11.jpg'), route: 'Desserts' }, 
    { name: 'Drinks', image: require('../assets/drink9.jpg'), route: 'Drinks' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <ScrollView contentContainerStyle={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
    padding: 16,
  },
  title: {
    fontSize: 36, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', 
  },
  menuList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  menuItem: {
    width: '45%',
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4, 
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#ddd', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuImage: {
    width: '100%',
    height: 150,
    borderRadius: 15, 
  },
  menuText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#007AFF', 
  },
});

export default MenuPage;
