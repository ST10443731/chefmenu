import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const AboutPage: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/bill.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        
        {/* Optional Image */}
        <Image 
          source={require('../assets/-5.jpg')} 
          style={styles.image} 
        />
        
        <Text style={styles.content}>
        Chef Christifell is a distinguished private chef celebrated for his exceptional culinary expertise and dynamic dining experiences.
         Every night, he creates unique and personalized meals that delight his clients, making every event truly memorable.
         With a dedication to quality and creativity,
         Chef Christifell continuously strives to provide innovative and exquisite dishes that cater to his clients' diverse tastes and preferences.
        </Text>
        <Text style={styles.content}>
        To further enhance this experience, the Chef Christifell app offers a seamless way for him to update his menu swiftly,
        ensuring clients have immediate access to the latest offerings.
        This adaptability guarantees that each dining occasion is tailored precisely to the client’s preferences,
        creating a more immersive and exclusive experience.
        </Text>
        <Text style={styles.content}>
        With the app, Chef Christifell's culinary creations become even more accessible,
         making it easier for clients to enjoy the ever-evolving art of fine dining in the comfort of their homes or at special events.
          Whether for an intimate gathering or a grand celebration,
         Chef Christifell’s attention to detail and passion for gastronomy ensure a truly unforgettable culinary journey.
        </Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white for better readability
    borderRadius: 10,
    padding: 20,
    margin: 20,
    elevation: 5, // Add shadow on Android
    shadowColor: '#000', // Add shadow on iOS
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#003366', // Dark blue color for the title
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover', // Ensure the image covers the area nicely
  },
  content: {
    fontSize: 18,
    textAlign: 'justify', // Justified text for better reading experience
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AboutPage;
