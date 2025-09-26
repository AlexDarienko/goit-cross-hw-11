# goit-cross-hw-11

# HabitFlow Perf Opt (Animations + Memo + Smaller deps)

- Reanimated: розгортання картки (long-press) — `src/components/composite/HabitCard.jsx`
- LayoutAnimation: додавання/видалення елементів — `HomeScreen`, `AddHabitScreen`, `HabitDetailsScreen`
- Оптимізація ререндерів: React.memo/useMemo/useCallback у `HabitCard` та `HomeScreen`
- Заміна важких залежностей: `dayjs` замість `moment`
- Аналіз бандлу (Web): `npm run analyze:web` → `docs/bundle-report.html`

## Запуск

```bash
rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
npm install
npx expo start -c
# натисніть "a" для Android емулятора
```
