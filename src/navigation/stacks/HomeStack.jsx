import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../screens';
import HomeScreen from '@/screens/Home/HomeScreen';
import AddHabitScreen from '@/screens/AddHabit/AddHabitScreen';
import HabitDetailsScreen from '@/screens/HabitDetails/HabitDetailsScreen';
import { useThemeColors } from '@/state/theme/ThemeContext';
const Stack=createStackNavigator();
export default function HomeStack(){
  const colors = useThemeColors();
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{ backgroundColor: colors.bg },
      headerTintColor: colors.text,
      headerTitleStyle:{ color: colors.text },
    }}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} options={{title:'Мої звички'}}/>
      <Stack.Screen name={SCREENS.ADD_HABIT} component={AddHabitScreen} options={{title:'Додати звичку'}}/>
      <Stack.Screen name={SCREENS.HABIT_DETAILS} component={HabitDetailsScreen} options={{title:'Деталі звички'}}/>
    </Stack.Navigator>
  );
}
