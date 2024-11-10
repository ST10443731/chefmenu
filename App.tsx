import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Chefmenu/Pages/HomePage';
import MenuPage from '../Chefmenu/Pages/MenuPage';
import CoursesPage from '../Chefmenu/Pages/CoursesPage';
import BillPage from '../Chefmenu/Pages/Billpage'; // Correct casing
import ContactPage from '../Chefmenu/Pages/ContactsPage'; // Correct casing
import Starters from '../Chefmenu/Pages/Starters';
import Maincourse from '../Chefmenu/Pages/Maincourse';
import Drinks from '../Chefmenu/Pages/Drinks';
import AboutPage from '../Chefmenu/Pages/About'; // Removed extra semicolon
import DessertPage from '../Chefmenu/Pages/Desserts'; // Removed extra semicolon
import Chef from '../Chefmenu/Pages/chef'; // Added Chef import

// Define the parameter list for the stack navigator
type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Courses: undefined;
  Bill: undefined;
  Contact: undefined;
  About: undefined;
  Desserts: undefined;
  Drinks: undefined;
  Maincourse: undefined;
  Starters: undefined;
  Chef: undefined;  // Added Chef screen to param list
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Courses" component={CoursesPage} />
        <Stack.Screen name="Bill" component={BillPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Desserts" component={DessertPage} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Maincourse" component={Maincourse} />
        <Stack.Screen name="Starters" component={Starters} />
        <Stack.Screen name="Chef" component={Chef} />  {/* Added Chef screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
