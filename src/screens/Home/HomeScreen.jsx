import React, { useMemo, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, LayoutAnimation, UIManager, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@/navigation/screens';
import HabitCard from '@/components/composite/HabitCard';
import CustomButton from '@/components/ui/CustomButton';
import { useSelector } from 'react-redux';
import { useThemeColors, useTheme } from '@/state/theme/ThemeContext';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen(){
  const navigation=useNavigation();
  const colors = useThemeColors();
  const { theme, toggleTheme } = useTheme();
  const habits = useSelector(state => state.habits);
  const goAdd = useCallback(()=>{ navigation.navigate(SCREENS.ADD_HABIT); },[navigation]);
  const openDetails = useCallback((id)=>{ navigation.navigate(SCREENS.HABIT_DETAILS,{habitId:id}); },[navigation]);
  useEffect(()=>{ LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); },[habits.length]);
  const header = useMemo(()=>(
    <View style={{paddingHorizontal:16,paddingTop:8, paddingBottom:4, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'700',color:colors.text}}>Мої звички</Text>
      <CustomButton variant="secondary" title={theme==='light'?'Dark':'Light'} onPress={toggleTheme} />
    </View>
  ),[colors.text, theme, toggleTheme]);
  const renderItem = useCallback(({item})=>(
    <HabitCard name={item.name} streak={item.streak} reminderTime={item.reminderTime} description={item.description} onPress={()=>openDetails(item.id)} />
  ),[openDetails]);
  const keyExtractor = useCallback((i)=>i.id,[]);
  return(
    <View style={[styles.container,{backgroundColor:colors.bg}]}>
      {header}
      <FlatList
        data={habits}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{textAlign:'center',color:'#666',marginTop:24}}>Немає звичок</Text>}
        contentContainerStyle={{paddingBottom:120}}
        removeClippedSubviews
        initialNumToRender={8}
        windowSize={5}
      />
      <View style={styles.fab}><CustomButton title="Додати" onPress={goAdd} /></View>
    </View>
  );
}
const styles=StyleSheet.create({container:{flex:1},fab:{position:'absolute',right:16,bottom:24}});
