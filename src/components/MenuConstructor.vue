<template>
  <div>
  <h2>Меню на неделю</h2>
    <div class="menu">
      <div v-for="(day, index1) in menu" class="day">
        <h3>{{ days[index1]}} <span class="calories"> {{ getDayCalories(day) }} ккал ({{getProcent(getDayCalories(day)) }}%)</span></h3>
        <div v-for="(eating, index2) in day" class="meal" role="button" tabindex="0"
          @click="showRecipe(index1, index2)"
          @keydown.enter="showRecipe(index1, index2)"
          @keydown.space.prevent="showRecipe(index1, index2)">
          <div :class="eating.meal">
              <p> {{ meals[index2] }} <span class="calories"> {{ eating.calories }} ккал ({{getProcent(eating.calories) }}%)</span></p>
              <div class="dish">
                <i class="fa-solid fa-bars"></i>
                <span> {{ eating.title }} </span>
              </div>
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
          for (let meal of day) {
            dayCalories += meal.calories;
          }
          return dayCalories;
        },
        showRecipe(day, meal) {
          this.$emit('showRecipe', day, meal);
        },
    }
}
</script>

<style scoped>
.meal {
    text-align: left;
    border-radius: 10px;
    border: 1px solid #dbe8e4;
    margin-top: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color .2s, transform .2s;
}
.meal:hover, .meal:focus-within {
    border-color: #287b74;
    transform: translateY(-2px);
}
.meal:focus-visible {
    outline: 2px solid #205e59;
    outline-offset: 2px;
}
.breakfast {
    width: 100%;
}

.dish {
    background: #f1f7f5;
    width: 100%;
    display: flow-root;
    padding: 12px;
    border-top: 1px solid #dbe8e4;
}

.meal p {
    padding: 10px 12px;
    margin: 0;
}
.menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: 16px;
    margin-bottom: 40px;
}
.day {
    min-width: 0;
    padding: 18px;
    background: #fff;
    border: 1px solid #dbe8e4;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(30, 65, 65, .08);
}
.day h3 {
    margin: 0 0 14px;
    overflow: auto;
}
.calories {
    font-size: 14px;
    font-weight: normal;
    color: #56736f;
}

.fa-bars, .calories {
    float: right;
}
</style>
