import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import DrawerNavigator from '@/navigation/drawer/DrawerNavigator';
import { useTheme } from '@/state/theme/ThemeContext';
export default function RootNavigator(){
  const { theme } = useTheme();
  const navTheme = theme === 'dark' ? DarkTheme : DefaultTheme;
  return (<NavigationContainer theme={navTheme}><DrawerNavigator/></NavigationContainer>);
}
