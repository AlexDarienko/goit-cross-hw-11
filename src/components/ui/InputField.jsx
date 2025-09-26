import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useThemeColors } from '@/state/theme/ThemeContext';

export default function InputField({ placeholder, value, onChangeText, style }) {
  const colors = useThemeColors();
  return (
    <TextInput
      style={[styles.input, { borderColor: colors.border, backgroundColor: '#fff', color: '#111' }, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 8
  },
});