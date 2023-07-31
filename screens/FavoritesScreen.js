import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favoritesContext';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>There's No Favorites Meals</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#918103',
  },
});
