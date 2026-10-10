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
            if (Number.isFinite(cal) && cal > 0) {
                this.dailyCalories = cal;
                localStorage.setItem('dailyCalories', cal);
            }
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
            this.isShowRecipe = true;
        },
        createMenu() {
            if (!Number.isFinite(this.dailyCalories) || this.dailyCalories <= 0) {
                this.showForm();
                return;
            }
            const recipesForMenu = [...recipes];
            this.menu = [];
            for (let i = 0; i < 7; i++) {
                this.menu.push([]);
                for (let j=0; j < 3; j++) {
                    const recipesMeal = recipesForMenu.filter(recipe => recipe.meal === this.meals[j]);
                    const num = Math.floor(Math.random()*recipesMeal.length);
                    const selected = recipesMeal[num];
                    recipesForMenu.splice(recipesForMenu.indexOf(selected), 1);
                    const targetCalories = this.mealsProp[j] * this.dailyCalories;
                    const mult = targetCalories <= selected.calories * 1.1
                        ? 1 : Math.ceil(targetCalories / selected.calories * 10) / 10;
                    this.menu[i].push({
                        ...selected,
                        calories: Math.ceil(selected.calories*mult),
                        ingredients: selected.ingredients.map(item => ({
                            ...item,
                            quantity: Math.round(item.quantity*mult)
                        }))
                    });
                }
            }
            this.isShownRecipes = false;
            this.isShownMenu = true;
        },
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background: #f4f7f5;
    color: #23343a;
}
#app {
    max-width: 1180px;
    margin: 0 auto;
    padding: 28px 20px 60px;
    font: 16px/1.5 Arial, sans-serif;
}
nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 16px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 8px 30px rgba(30, 65, 65, .08);
}
button {
    padding: 10px 16px;
    border: 1px solid #287b74;
    border-radius: 9px;
    background: #e9f4f1;
    color: #205e59;
    font: inherit;
    cursor: pointer;
}
button:hover, button:focus, .currentFilter {
    background: #287b74;
    color: #fff;
}
button:focus-visible, input:focus-visible, select:focus-visible, .close:focus-visible {
    outline: 2px solid #205e59;
    outline-offset: 2px;
}
input:not([type='radio']), select {
    width: 100%;
    min-height: 42px;
    padding: 8px 10px;
    border: 1px solid #b9cfca;
    border-radius: 8px;
    background: #fff;
    color: inherit;
    font: inherit;
}
#dailycaloriesform, .recipe {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 24px;
    background: #fff;
    border: 1px solid #dbe8e4;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(30, 65, 65, .08);
}
#dailycaloriesform {
    width: min(100%, 460px);
    gap: 7px;
}
#dailycaloriesform label {
    text-align: left;
}
fieldset {
    margin: 8px 0;
    border: 1px solid #dbe8e4;
    border-radius: 8px;
}
.form-error {
    color: #a43f3f;
    margin: 0;
}
h2 {
    text-align: center;
    margin: 32px 0 20px;
    font-size: 30px;
}
h3 {
    font-size: 21px;
    line-height: 1.3;
    margin: 0 0 12px;
}
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px;
    background: rgba(18, 37, 38, .6);
    position: fixed;
    display: flex;
    overflow-y: auto;
    z-index: 10;
}
.content {
    width: min(100%, 650px);
    margin: auto;
}
.content form {
    display: flex;
    justify-content: center;
}
.close {
    align-self: flex-end;
    border: 0;
    background: none;
    color: #42635e;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
}
.close:hover, .close:focus {
    color: #a43f3f;
}
.filter {
    display: flex;
    justify-content: center;
    margin-bottom: 22px;
}
.filter > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
}
.recipes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: 16px;
}
.recipe ul {
    padding-left: 20px;
}
.recipe li {
    clear: both;
    padding: 4px 0;
}
.recipe .calories {
    margin-left: 12px;
}
.instructions {
    overflow-wrap: anywhere;
}
.recipeMeal {
    padding: 0;
    margin: 0;
}
@media (max-width: 600px) {
    #app { padding: 12px; }
    nav { flex-direction: column; }
    nav button { width: 100%; }
    h2 { font-size: 25px; }
    #dailycaloriesform, .recipe { padding: 18px; }
}
</style>
