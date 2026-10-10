export const MEALS = [
  {id: 'breakfast', label: 'Завтрак', share: 0.33},
  {id: 'lunch', label: 'Обед', share: 0.38},
  {id: 'dinner', label: 'Ужин', share: 0.24}
];

export const WEEKDAYS = [
  'Понедельник', 'Вторник', 'Среда', 'Четверг',
  'Пятница', 'Суббота', 'Воскресенье'
];

export const ACTIVITY_OPTIONS = [
  {value: 1.2, text: 'Физическая активность отсутствует или минимальна'},
  {value: 1.38, text: 'Тренировки средней тяжести 3 раза в неделю'},
  {value: 1.46, text: 'Тренировки средней тяжести 5 раз в неделю'},
  {value: 1.55, text: 'Интенсивные тренировки 5 раз в неделю'},
  {value: 1.64, text: 'Тренировки каждый день'},
  {value: 1.73, text: 'Интенсивные тренировки каждый день или 2 раза в день'},
  {value: 1.9, text: 'Ежедневная физическая нагрузка + физическая работа'}
];

export const PURPOSE_OPTIONS = [
  {value: -0.2, text: 'Сбросить вес'},
  {value: -0.1, text: 'Рекомпозиция'},
  {value: 0.2, text: 'Набрать мышечную массу'}
];

export const CALORIE_STORAGE_KEY = 'dailyCalories';
export const ALL_MEALS_FILTER = 'all';
