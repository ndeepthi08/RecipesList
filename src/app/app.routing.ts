import { Routes, RouterModule } from "@angular/router";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipesList', pathMatch:'full' },
    { path: 'recipesList', component: RecipesListComponent},
    { path: 'recipeDetails/:idMeal', component: RecipeDetailsComponent}
    ];
    
    export const routing = RouterModule.forRoot(APP_ROUTES);