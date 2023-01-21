<template>
  <h2>Меню на неделю</h2>
    <div class="menu">
      <div v-for="(day, index1) in menu" class="day">
        <h3>{{ days[index1]}} <span class="calories"> {{ getDayCalories(day) }} ккал ({{getProcent(getDayCalories(day)) }}%)</span></h3>
        <div v-for="(eating, index2) in day" class="meal">
          <div :class="eating.meal">
              <p> {{ meals[index2] }} <span class="calories"> {{ eating.calories }} ккал ({{getProcent(eating.calories) }}%)</span></p>
              <div class="dish">
                <i class="fa-solid fa-bars" :data-day="index1" :data-meal="index2" @click="showRecipe"></i>
                <span> {{ eating.title }} </span>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'menu-constructor',
    props: {
        menu: {
            type: Array,
            requered: true,
        },
        dailyCalories: {
          type:Number,
          required:true,
        },
    },
    data() {
      return {
        days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота', 'Воскресенье'],
        meals: ['Завтрак', 'Обед', 'Ужин'],
      }
    },
    methods: {
        getProcent(calories) {
          return Math.ceil(calories*100/this.dailyCalories);
        },
        getDayCalories(day) {
          let dayCalories = 0;
          for (meal of day) {
            dayCalories += meal.calories;
          }
          return dayCalories;
        },
        showRecipe(event) {
          this.$emit('showRecipe', Number(event.target.dataset.day), Number(event.target.dataset.meal));
        },
    }
}
</script>
