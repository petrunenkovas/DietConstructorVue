<template>
  <div id="app">
    <nav>
        <button @click="showForm">Рассчитать дневной калораж</button>
        <button @click="createMenu">Составить меню на неделю</button>
        <button @click="showRecipes">Посмотреть список рецептов</button>
    </nav>
    <dailycalories-form @countCalories="setCalories" v-if="isShownForm" @close="closeModal"></dailycalories-form>
    <menu-constructor :menu="menu" :dailyCalories="dailyCalories" v-if="isShownMenu" @showRecipe="showRecipe"></menu-constructor>
    <recipe-dialog v-if="isShowRecipe" :recipe="recipe" @close="closeModal"></recipe-dialog>
    <recipes-page v-if="isShownRecipes"></recipes-page>
  </div>
</template>

<script>

import DailyCaloriesForm from './components/DailyCaloriesForm.vue'
import Menu from "./components/Menu.vue";


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
