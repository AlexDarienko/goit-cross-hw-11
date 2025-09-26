import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useThemeColors } from '@/state/theme/ThemeContext';
export default function StatisticsScreen(){
  const colors = useThemeColors();
  const total = useSelector(s => s.habits.length);
  const streakSum = useSelector(s => s.habits.reduce((acc,h)=>acc+h.streak,0));
  return(<View style={[styles.container,{backgroundColor:colors.bg}]}>
    <View style={[styles.card,{borderColor:colors.border}]}>
      <Text style={[styles.title,{color:colors.text}]}>Статистика</Text>
      <Text style={styles.line}>Загалом звичок: {total}</Text>
      <Text style={styles.line}>Сума серій: {streakSum}</Text>
    </View>
  </View>);
}
const styles=StyleSheet.create({container:{flex:1,padding:16},card:{borderWidth:1,borderRadius:12,padding:16},title:{fontSize:18,fontWeight:'700',marginBottom:8},line:{color:'#666',marginTop:4}});
