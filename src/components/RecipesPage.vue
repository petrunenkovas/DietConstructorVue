<template>
<h2 @click=showRecipes>Рецепты</h2>
    <div class="recipes">
      <div v-for="recipe in recipesList" class="recipe">
      <h3>{{ recipe.title }} <span class="calories"> {{ recipe.calories }} ккал</span></h3>
      <h6> {{ recipe.meal }}</h6>
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
</template>

<script>
  export default {
    name: 'recipes-page',
    data() {
        return {
            meals: ['Завтрак', 'Обед', 'Ужин'],
            recipesList: [...recipes],
        }
    },
    methods: {
        
    },
}
</script>
