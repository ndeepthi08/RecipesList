import {APP_ROUTES} from './app.routing';
import {RecipesListComponent} from './recipes-list/recipes-list.component'
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component'
fdescribe('routes', () => {
    
    it('it should contain a route for /recipesList', () => {
      expect(APP_ROUTES).toContain({path:'recipesList',component:RecipesListComponent})
    });
    it('it should contain a route for /recipeDetails', () => {
      expect(APP_ROUTES).toContain({path:'recipeDetails',component:RecipeDetailsComponent})
    });
})