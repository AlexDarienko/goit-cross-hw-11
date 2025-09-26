import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useThemeColors } from '@/state/theme/ThemeContext';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

function HabitCardBase({name,streak,reminderTime,onPress,description,createdAt}){
  const colors = useThemeColors();
  const expanded = useSharedValue(0);
  const toggle = useCallback(()=>{ expanded.value = expanded.value ? 0 : 1; },[]);

  const animStyle = useAnimatedStyle(()=> ({
    height: withTiming(expanded.value ? 72 : 0, { duration: 200 }),
    opacity: withTiming(expanded.value ? 1 : 0, { duration: 200 }),
  }));

  const meta = useMemo(()=>`Серія: ${streak} днів · ${reminderTime}`, [streak, reminderTime]);

  return(
    <Pressable style={[styles.card,{borderColor:colors.border,backgroundColor:colors.card}]} onPress={onPress} onLongPress={toggle}>
      <View style={styles.circle}><Text style={{fontSize:14}}>✓</Text></View>
      <View style={{flex:1}}>
        <Text style={[styles.name,{color:colors.text}]} numberOfLines={1}>{name}</Text>
        <Text style={[styles.details]}>{meta}</Text>
        <Animated.View style={[styles.expand,animStyle]}>
          <Text numberOfLines={3} style={styles.expandText}>{description}</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}
const styles=StyleSheet.create({
  card:{flexDirection:'row',alignItems:'center',borderRadius:12,padding:12,marginVertical:6,alignSelf:'stretch',borderWidth:1, gap:12, marginHorizontal:16},
  circle:{width:32,height:32,borderRadius:16,backgroundColor:'#E6FFE6',justifyContent:'center',alignItems:'center'},
  name:{fontSize:16,fontWeight:'600'},
  details:{fontSize:12,color:'#666',marginTop:2},
  expand:{overflow:'hidden', marginTop:6},
  expandText:{color:'#666', fontSize:12, lineHeight:16}
});
export default React.memo(HabitCardBase);
