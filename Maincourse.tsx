import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type MainCoursePageNavigationProp = StackNavigationProp<RootStackParamList, 'Maincourse'>;

const mainCourseData = [
  { name: 'Grilled Ribeye Steak', description: 'Juicy ribeye steak with herbs', image: require('../assets/beef well.jpg'), price: 25 },
  { name: 'Roast Chicken', description: 'Oven-roasted chicken with seasonal vegetables', image: require('../assets/elegantfood2.jpg'), price: 18 },
  { name: 'Seafood Paella', description: 'Spanish rice with seafood, bell peppers, and saffron', image: require('../assets/elegantfood4.jpg'), price: 22 },
  { name: 'Vegetarian Lasagna', description: 'Lasagna with layers of vegetables and cheese', image: require('../assets/lobster.jpg'), price: 16 },
];

const MainCoursePage: React.FC = () => {
  const navigation = useNavigation<MainCoursePageNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header ection */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.headerButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Main Course</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Text style={styles.headerButtonText}>Christoffel</Text>
        </TouchableOpacity>
      </View>

      {/* Maincourse  */}
      <ScrollView contentContainerStyle={styles.mainCourseList}>
        {mainCourseData.map((course, index) => (
          <View key={index} style={styles.courseItem}>
            <Image source={course.image} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{course.name}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              <Text style={styles.coursePrice}>${course.price.toFixed(2)}</Text>
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
  mainCourseList: {
    padding: 20,
  },
  courseItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  courseInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  courseName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#dddddd',
    marginVertical: 5,
  },
  coursePrice: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default MainCoursePage;
