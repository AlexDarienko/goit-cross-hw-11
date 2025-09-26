import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '@/components/ui/CustomButton';
import { useTheme, useThemeColors } from '@/state/theme/ThemeContext';
export default function ProfileScreen(){
  const { theme, toggleTheme } = useTheme();
  const colors = useThemeColors();
  return(<View style={[styles.container,{backgroundColor:colors.bg}]}>
    <View style={styles.content}>
      <View style={styles.avatar}><Text style={{fontSize:28}}>👤</Text></View>
      <Text style={[styles.name,{color:colors.text}]}>Ім’я Користувача</Text>
      <Text style={styles.email}>email@example.com</Text>
      <CustomButton title={theme==='light'?'Увімкнути темну':'Увімкнути світлу'} onPress={toggleTheme}/>
    </View>
  </View>);
}
const styles=StyleSheet.create({container:{flex:1},content:{padding:16,alignItems:'center'},avatar:{width:96,height:96,borderRadius:48,borderWidth:1,borderColor:'#111',justifyContent:'center',alignItems:'center',marginTop:12,marginBottom:8},name:{fontSize:18,fontWeight:'700'},email:{color:'#666',marginBottom:12}});
