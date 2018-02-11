import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesListService } from '../shared/categories-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  categoriesList = [];
  itemId: any;
  constructor(private categoriesListService: CategoriesListService ) { }

  ngOnInit() {

  // @localStorage
  this.itemId =JSON.parse(localStorage.getItem("id"));
  this.categoriesList.push(this.itemId);

  }
  ngOnDestroy() {
  }

}
