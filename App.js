import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from '@/navigation/RootNavigator';
import { ThemeProvider } from '@/state/theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function App(){
  const [ready, setReady] = useState(false);
  useEffect(()=>{(async()=>{ try{ await Font.loadAsync(Ionicons.font);} finally{ setReady(true);} })();},[]);
  if(!ready) return null;
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigator/>
        <StatusBar style="auto"/>
      </ThemeProvider>
    </Provider>
  );
}
