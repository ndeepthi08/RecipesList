import { Component, OnInit } from '@angular/core';
import { CategoriesListService} from '../shared/categories-list.service';
import { element } from 'protractor';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  categoriesList = [];
   list  = [];
   
  constructor(private router:Router,private categoriesListService: CategoriesListService) { }

  ngOnInit() {
    this.categoriesListService.getCategories().subscribe(data =>{
      this.categoriesList = data.meals;
    });
  }

  onSelect(categorie){
    localStorage.setItem("id", JSON.stringify(categorie));
    this.categoriesListService.modelData(true);
    this.router.navigate(['recipeDetails'])
    

  }
}
