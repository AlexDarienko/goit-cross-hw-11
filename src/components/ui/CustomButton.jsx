import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { useThemeColors } from '@/state/theme/ThemeContext';
export default function CustomButton({ title, onPress, style, variant='primary' }){
  const colors = useThemeColors();
  const bg = variant==='primary' ? colors.primary : colors.card;
  const fg = variant==='primary' ? '#fff' : colors.text;
  return(<TouchableOpacity style={[styles.button,{backgroundColor:bg,borderColor:colors.border},style]} onPress={onPress}>
    <Text style={[styles.text,{color:fg}]}>{title}</Text>
  </TouchableOpacity>);
}
const styles=StyleSheet.create({
  button:{paddingVertical:12,paddingHorizontal:20,borderRadius:12,alignItems:'center',borderWidth:1,
    ...Platform.select({ios:{shadowColor:'#000',shadowOpacity:0.08,shadowRadius:4,shadowOffset:{width:0,height:2}},android:{elevation:1}})},
  text:{fontSize:16,fontWeight:'600'}
});
