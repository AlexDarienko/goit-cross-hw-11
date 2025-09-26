import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../screens';
import HomeStack from '../stacks/HomeStack';
import StatisticsScreen from '@/screens/Statistics/StatisticsScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeColors } from '@/state/theme/ThemeContext';

const Tab=createBottomTabNavigator();
export default function TabNavigator(){
  const colors = useThemeColors();
  return(
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false,
      tabBarActiveTintColor: colors.text,
      tabBarInactiveTintColor: '#999',
      tabBarStyle:{ backgroundColor: colors.bg, borderTopColor: colors.border },
      tabBarIcon:({color,size})=>{
        const map={
          [SCREENS.TAB_HOME]: <Ionicons name="home-outline" size={size} color={color}/>,
          [SCREENS.TAB_STATS]: <Ionicons name="stats-chart" size={size} color={color}/>,
          [SCREENS.TAB_PROFILE]: <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>,
        };
        return map[route.name] || <Ionicons name="ellipse-outline" size={size} color={color}/>;
      }
    })}>
      <Tab.Screen name={SCREENS.TAB_HOME} component={HomeStack} options={{title:'Звички'}}/>
      <Tab.Screen name={SCREENS.TAB_STATS} component={StatisticsScreen} options={{title:'Статистика'}}/>
      <Tab.Screen name={SCREENS.TAB_PROFILE} component={ProfileScreen} options={{title:'Профіль'}}/>
    </Tab.Navigator>
  );
}
