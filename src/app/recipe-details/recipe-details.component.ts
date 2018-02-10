import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesListService } from '../shared/categories-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: any;
  private sub: any;
  categoriesList= [];
  constructor(private route: ActivatedRoute, private categoriesListService: CategoriesListService ) { }

  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      this.id = params['idMeal'];
  });
  this.categoriesListService.getRecipeDetails(this.id).subscribe(data =>{
    console.log(data);
    this.categoriesList = data.meals;
    console.log(this.categoriesList);
  });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
