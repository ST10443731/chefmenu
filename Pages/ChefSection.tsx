import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';

interface Dish {
  name: string;
  description: string;
  course: string;
  price: string;
}

const ChefSection: React.FC = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<Dish[]>([]);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleAddDish = () => {
    // Validate input
    if (!dishName || !description || !course || !price || isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Error', 'Please fill in all fields and provide a valid price greater than zero.');
      return;
    }

    const newDish: Dish = { name: dishName, description, course, price };
    setMenuItems(prevItems => [...prevItems, newDish]);

    Alert.alert('Success', 'Dish added successfully!');
    
    // Optionally, navigate to another screen after adding a dish (e.g., Home)
    // navigation.navigate('Home');

    // Clear input fields after adding the dish
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  const handleRemoveDish = (index: number) => {
    setMenuItems(prevItems => prevItems.filter((_, i) => i !== index));
    Alert.alert('Success', 'Dish removed successfully!');
  };

  return (
    <ImageBackground source={require('../assets/bill.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Chef Section</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Course"
          value={course}
          onChangeText={setCourse}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddDish}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        <Text style={styles.menuTitle}>Menu Items:</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => item.name + index} // Make sure item names are unique
          renderItem={({ item, index }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>
                {item.name} - {item.course} - ${item.price}
              </Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveDish(index)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuTitle: {
    fontSize: 22,
    marginVertical: 20,
    textAlign: 'center',
    color: '#003366',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ChefSection;
