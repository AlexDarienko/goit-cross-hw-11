import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from '../screens';
import TabNavigator from '../tabs/TabNavigator';
import { View, Text } from 'react-native';
import { useThemeColors } from '@/state/theme/ThemeContext';
const Drawer=createDrawerNavigator();
const Screen=(label)=>()=> {
  const colors = useThemeColors();
  return <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.bg}}><Text style={{color:colors.text}}>{label}</Text></View>;
};
export default function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name={SCREENS.DRAWER_ROOT} component={TabNavigator} options={{title:'Головна'}}/>
      <Drawer.Screen name={SCREENS.SUPPORT} component={Screen('Підтримка')} options={{title:'Підтримка'}}/>
      <Drawer.Screen name={SCREENS.SETTINGS} component={Screen('Налаштування')} options={{title:'Налаштування'}}/>
    </Drawer.Navigator>
  );
}
