import { Component, OnInit } from '@angular/core';

import { CategoriesListService} from '../shared/categories-list.service';
import { element } from 'protractor';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  categoriesList = [];
   list  = [];
   
  constructor(private categoriesListService: CategoriesListService) { }

  ngOnInit() {
    this.categoriesListService.getCategories().subscribe(data =>{
      this.categoriesList = data.meals;
      console.log(this.categoriesList);
    });
  }

  onSelect(categorie){
    console.log(categorie);
  }
}
