<template>
    <div class="dialog">
        <div class="content">
            <div class="recipe">
                <span class="close" @click="closeModal">&times;</span>
                <h3>{{ recipe.title }}</h3>
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
  export default {
    name: 'recipe-dialog',
    props: {
        recipe: {
            type: Object,
            required: true,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    }
}
</script>
