import React,{useState, useCallback} from 'react';
import { View, StyleSheet, LayoutAnimation } from 'react-native';
import InputField from '@/components/ui/InputField';
import CustomButton from '@/components/ui/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addHabit } from '@/state/habits/habitsSlice';
import { useThemeColors } from '@/state/theme/ThemeContext';

export default function AddHabitScreen(){
  const nav=useNavigation();
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const [name,setName]=useState('');
  const [desc,setDesc]=useState('');
  const [time,setTime]=useState('08:00');
  const onSave = useCallback(()=>{
    if(!name.trim()) return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(addHabit({ name, description: desc, reminderTime: time }));
    nav.goBack();
  },[name,desc,time,dispatch,nav]);
  return(<View style={[styles.container,{backgroundColor:colors.bg}]}>
    <View style={styles.content}>
      <InputField placeholder="Назва звички" value={name} onChangeText={setName}/>
      <InputField placeholder="Опис" value={desc} onChangeText={setDesc}/>
      <InputField placeholder="Нагадування (08:00)" value={time} onChangeText={setTime}/>
      <CustomButton title="Зберегти" onPress={onSave}/>
    </View>
  </View>);
}
const styles=StyleSheet.create({container:{flex:1},content:{padding:16}});
