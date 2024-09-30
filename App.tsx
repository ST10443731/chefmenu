import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Chefmenu/Pages/HomePage';
import MenuPage from '../Chefmenu/Pages/MenuPage';
import CoursesPage from '../Chefmenu/Pages/CoursesPage';
import BillPage from '../Chefmenu/Pages/Billpage';
import ChefSection from '../Chefmenu/Pages/Chefsection';
import ContactPage from '../Chefmenu/Pages/ContactsPage';
import Starters from '../Chefmenu/Pages/Starters';
import Maincourse from '../Chefmenu/Pages/Maincourse';
import Drinks from '../Chefmenu/Pages/Drinks';
import AboutPage from '../Chefmenu/Pages/About';
import DessertPage from '../Chefmenu/Pages/Desserts';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Courses" component={CoursesPage} />
        <Stack.Screen name="Bill" component={BillPage} />
        <Stack.Screen name="ChefSection" component={ChefSection} />
        <Stack.Screen name="Contact" component={ContactPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Desserts" component={DessertPage} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Maincourse" component={Maincourse} />
        <Stack.Screen name="Starters" component={Starters} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
