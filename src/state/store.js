import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '@/state/habits/habitsSlice';
export const store = configureStore({ reducer: { habits: habitsReducer } });
