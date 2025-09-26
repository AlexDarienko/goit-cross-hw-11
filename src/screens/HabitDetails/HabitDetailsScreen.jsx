import React, { useMemo, useState, useCallback } from 'react';
import { View, StyleSheet, Text, LayoutAnimation } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeHabit, updateHabit, incrementStreak } from '@/state/habits/habitsSlice';
import InputField from '@/components/ui/InputField';
import CustomButton from '@/components/ui/CustomButton';
import { useThemeColors } from '@/state/theme/ThemeContext';

export default function HabitDetailsScreen(){
  const route=useRoute(); const nav=useNavigation(); const colors = useThemeColors();
  const habitId=route.params?.habitId;
  const habit = useSelector(s => s.habits.find(h => h.id===habitId));
  const dispatch = useDispatch();
  const [name,setName]=useState(habit?.name||''); const [desc,setDesc]=useState(habit?.description||'');
  const header = useMemo(()=> (<Text style={{fontSize:18,fontWeight:'700',color:colors.text,marginBottom:12}}>Деталі звички</Text>), [colors.text]);
  const onSave = useCallback(()=>{ if(!habit) return; dispatch(updateHabit({id:habit.id,changes:{name,description:desc}})); nav.goBack(); },[habit,dispatch,name,desc,nav]);
  const onDelete = useCallback(()=>{ if(!habit) return; LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); dispatch(removeHabit(habit.id)); nav.goBack(); },[habit,dispatch,nav]);
  const onInc = useCallback(()=>{ if(!habit) return; dispatch(incrementStreak(habit.id)); },[habit,dispatch]);
  if(!habit){ return (<View style={[styles.center,{backgroundColor:colors.bg}]}><Text style={{color:'#B00020'}}>Не знайдено</Text></View>); }
  return (<View style={[styles.container,{backgroundColor:colors.bg}]}>
    <View style={styles.content}>
      {header}
      <Text style={{color:'#666',marginBottom:8}}>Серія: {habit.streak} днів · {habit.reminderTime}</Text>
      <InputField placeholder="Назва" value={name} onChangeText={setName}/>
      <InputField placeholder="Опис" value={desc} onChangeText={setDesc}/>
      <View style={{height:8}}/>
      <CustomButton title="Зберегти" onPress={onSave}/>
      <View style={{height:8}}/>
      <CustomButton variant="secondary" title="+1 до серії" onPress={onInc}/>
      <View style={{height:8}}/>
      <CustomButton variant="secondary" title="Видалити" onPress={onDelete}/>
    </View>
  </View>);
}
const styles=StyleSheet.create({container:{flex:1},content:{padding:16},center:{flex:1,justifyContent:'center',alignItems:'center',padding:16}});
