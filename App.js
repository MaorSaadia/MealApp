import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favoritesContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#e9dc75' },
        sceneContainerStyle: { backgroundColor: '#e4e1c9' },
        drawerPosition: 'left',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
        drawerContentStyle: { backgroundColor: '#e9dc75' },
        drawerActiveTintColor: '#918103',
        drawerActiveBackgroundColor: 'white',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="list"
              color={color}
              size={size}
              style={{ position: 'absolute', right: 5 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="star"
              color={color}
              size={size}
              style={{ position: 'absolute', right: 5 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#e9dc75' },
            contentStyle: { backgroundColor: '#e4e1c9' },
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About The Meal',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
