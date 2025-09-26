import { createSlice, nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
const initialState = [
  { id: '1', name: 'Ранкова зарядка', description: '10 хвилин щодня', streak: 5, reminderTime: '07:30', createdAt: dayjs().subtract(5,'day').toISOString() },
  { id: '2', name: 'Читання', description: '20 сторінок', streak: 2, reminderTime: '21:00', createdAt: dayjs().subtract(2,'day').toISOString() },
];
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: {
      reducer(state, action){ state.unshift(action.payload); },
      prepare({ name, description, reminderTime }){
        return { payload: { id: nanoid(), name, description: description || '', reminderTime: reminderTime || '08:00', streak: 0, createdAt: dayjs().toISOString() } };
      }
    },
    removeHabit(state, action){ return state.filter(h => h.id !== action.payload); },
    updateHabit(state, action){
      const { id, changes } = action.payload;
      const idx = state.findIndex(h => h.id === id);
      if (idx >= 0) state[idx] = { ...state[idx], ...changes };
    },
    incrementStreak(state, action){
      const h = state.find(h => h.id === action.payload);
      if (h) h.streak += 1;
    }
  }
});
export const { addHabit, removeHabit, updateHabit, incrementStreak } = habitsSlice.actions;
export default habitsSlice.reducer;
