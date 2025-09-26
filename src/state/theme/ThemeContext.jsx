import React, { createContext, useContext, useMemo, useState } from 'react';
export const ThemeContext = createContext();
const LIGHT = { bg:'#FFFFFF', text:'#111111', card:'#F7F7F7', primary:'#4CAF50', border:'#E5E5E5' };
const DARK  = { bg:'#121212', text:'#EEEEEE', card:'#1E1E1E', primary:'#77DD77', border:'#2A2A2A' };
export const ThemeProvider = ({ children }) => {
  const [theme,setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const value = useMemo(()=>({ theme, toggleTheme }),[theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme === 'dark' ? DARK : LIGHT;
};
