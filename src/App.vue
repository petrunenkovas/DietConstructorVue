<template>
  <div id="app">
    <nav>
        <button @click="showForm">Рассчитать дневной калораж</button>
        <button @click="createMenu">Составить меню на неделю</button>
        <button @click="showRecipes">Посмотреть список рецептов</button>
    </nav>
    <daily-calories-form @countCalories="setCalories" v-if="isShownForm" @close="closeModal"></daily-calories-form>
    <menu-constructor :menu="menu" :dailyCalories="dailyCalories" v-if="isShownMenu" @showRecipe="showRecipe"></menu-constructor>
    <recipe-dialog v-if="isShowRecipe" :recipe="recipe" @close="closeModal"></recipe-dialog>
    <recipes-page v-if="isShownRecipes"></recipes-page>
  </div>
</template>

<script>
import {recipes} from "./assets/recipts";
import DailyCaloriesForm from './components/DailyCaloriesForm.vue';
import MenuConstructor from "./components/MenuConstructor.vue";
import RecipeDialog from "./components/RecipeDialog.vue";
import RecipesPage from "./components/RecipesPage.vue";


export default {
  name: 'App',
  components: {
    DailyCaloriesForm,
    MenuConstructor,
    RecipeDialog,
    RecipesPage
  },
  data() {
        return {
            dailyCalories: 0,
            isShownForm: false,
            isShownMenu: false,
            menu: [],
            meals: ['breakfast', 'lunch', 'dinner'],
            mealsProp: [0.33, 0.38, 0.24],
            isShowRecipe: false,
            isShownRecipes: false,
            recipe: {},
        }
    },
    mounted() {
        this.dailyCalories = Number(localStorage.getItem('dailyCalories'))||0;
    },
    methods: {
        setCalories(cal) {
            this.dailyCalories = cal;
            localStorage.setItem('dailyCalories', cal);
        },
        showForm() {
            this.isShownForm = true;
        },
        showRecipes() {
            this.isShownMenu = false;
            this.isShownRecipes = true;
        },
        closeModal() {
            this.isShownForm = false;
            this.isShowRecipe = false;
        },
        showRecipe(day, meal) {
            this.recipe = this.menu[day][meal];
            console.log(this.recipe);
            this.isShowRecipe = true;
        },
        createMenu() {
            const recipesForMenu = [];
            for (let recipe of recipes) {
                recipesForMenu.push({...recipe});
            }
            if (this.menu.length !== 0) {
                while (this.menu.length) {
                    this.menu.pop();
                }
            }
            for (let i = 0; i < 7; i++) {
                this.menu.push([]);
                for (let j=0; j < 3; j++) {
                    const recipesMeal = [...recipesForMenu.filter(recipe => recipe.meal === this.meals[j])];
                    let mult = 1.1;
                    const num = Math.floor(Math.random()*recipesMeal.length);
                    recipesForMenu[(recipesMeal[num].id - 1)].meal = '';
                    let mealCal = recipesMeal[num].calories*mult;
                    while (mealCal < (this.mealsProp[j]* this.dailyCalories)) {
                        mealCal = recipesMeal[num].calories*mult;
                        mult += 0.1;
                    }
                    mult -= 0.1;
                    recipesMeal[num].calories = Math.ceil(recipesMeal[num].calories*mult);
                    for (let item of recipesMeal[num].ingredients) {
                        item.quantity = Math.round(item.quantity*mult);
                    }
                    this.menu[i].push(recipesMeal[num]);
                }
            }
            this.isShownRecipes = false;
            this.isShownMenu = true;
            while (recipesForMenu.length) {
                recipesForMenu.pop();
            }
        },
    }
}
</script>

<style>
#app {
    font-size: 18px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
input, select, button {
    text-align: center;
    border-radius: 5px;
    border: 1px solid teal;
    margin: 5px 0;
    height: 25px;
}
#dailycaloriesform, .recipe {
    display:flex;
    flex-direction: column;
    width: 350px;
    background-color: aliceblue;
    padding: 30px;
    border: 2px solid teal;
    border-radius: 10px;
}
button, router-link {
    background-color:lightsteelblue;
    margin: 5px;
}
h2 {
    text-align: center;
    padding-bottom: 0;
}

h3 {
    text-align: left;
    font-size: 25px;
    margin-top: 0;
}
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}

.content {
    margin: auto;
}

.close {
    position: relative;
    top: -25px;
    right: -15px;
    text-align: right;
    color: black;
    font-size: 35px;
    font-weight: bold;
}

.close:hover, .close:focus {
    color: red;
    cursor: pointer;
}

button:hover, button:focus, .currentFilter {
    background-color:steelblue;
    cursor: pointer;
}
.filter {
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}
.recipeMeal {
    padding: 0;
    margin: 0;
}
</style>
