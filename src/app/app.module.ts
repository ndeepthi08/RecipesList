import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { CategoriesListService } from './shared/categories-list.service';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {MatCardModule} from '@angular/material/card';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule, 
    MatCardModule,
    HttpModule,
    routing
  ],
  providers: [CategoriesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
