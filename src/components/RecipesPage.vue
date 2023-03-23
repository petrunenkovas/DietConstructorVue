<template>
    <div>
    <h2>Рецепты</h2>
    <div class="filter">
        <div>
            <button :class= "{currentFilter: selectedFilter === 'breakfast lunch dinner'}" @click="selectedFilter = 'breakfast lunch dinner'">Все</button>
            <button v-for="meal in meals" :class= "{currentFilter: selectedFilter === meal.title}" @click="selectedFilter=meal.title">{{meal.name}}</button>
        </div>
    </div>
    <div class="recipes">
      <div v-for="recipe in filteredRecipes" class="recipe">
      <h3>{{ recipe.title }} <span class="calories"> {{ recipe.calories }} ккал</span></h3>
      <h5 class="recipeMeal"> <i class="fa-regular fa-clock"></i> {{ getMeal(recipe.meal) }}</h5>
      <div class="ingredients">
          <ul>
              <li v-for="ingredient in recipe.ingredients">{{ ingredient.name }} <span v-if="ingredient.quantity === 0" class="calories">{{ingredient.measure}}</span><span v-else class="calories">{{ingredient.quantity}} {{ingredient.measure}}</span></li>
          </ul>
      </div>
      <div class="instructions">
          <p v-html="recipe.recipt"></p>
      </div>
      </div>
    </div>
</div>
</template>

<script>
import {recipes} from "../assets/recipts"
  export default {
    name: 'recipes-page',
    data() {
        return {
            meals: ['Завтрак', 'Обед', 'Ужин'],
            recipesList: [...recipes],
            selectedFilter: 'breakfast lunch dinner'
        }
    },
    mounted() {
        this.recipesList = this.sortRecipes();
    },
    methods: {
        getMeal(title) {
            const currMeal = this.meals.find((meal) => meal.title === title);
            return currMeal.name;
        },
        sortRecipes() {
            return [...this.recipesList].sort((recipe1, recipe2) => { 
                return recipe1.title.localeCompare(recipe2.title) 
            });
        },
    },
    computed: {
        filteredRecipes() {
            return [...this.recipesList].filter((recipe) => this.selectedFilter.includes(recipe.meal))
        },
    },
}
</script>

<style scoped>
.recipe {
    width: 500px;
}

</style>