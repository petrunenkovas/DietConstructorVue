import Vue from 'vue'
import Router from 'vue-router'
import RecipesPage from '@/components/RecipesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recipes',
      name: 'RecipesPage',
      component: RecipesPage
    }
  ]
})
