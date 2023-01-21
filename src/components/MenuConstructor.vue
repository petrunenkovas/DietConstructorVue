<template>
  <div>
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
        showRecipe(event) {
          this.$emit('showRecipe', Number(event.target.dataset.day), Number(event.target.dataset.meal));
        },
    }
}
</script>

<style scoped>
.meal {
    text-align: left;
    text-indent: 5px;
    border-radius: 15px;
    border: 2px solid teal;
    margin: auto;
    margin-top: 10px;
    padding: 0;
    width: 350px;
    vertical-align: middle;
}
.breakfast {
    width: 100%;
}

.dish {
    background: aliceblue;
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 10px 0;
    border-radius: 0 0 13px 13px;
    border-top: 1px solid teal;
}

.meal p {
    padding: 10px 0;
    margin: 0;
}
.menu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
}

.fa-bars, .calories {
    float: right;
    padding-right: 10px;
}
</style>