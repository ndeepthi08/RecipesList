import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { CategoriesListService } from './shared/categories-list.service';
// import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backBtn: boolean = false;

  back() {
    this.backBtn = false;
    this.route.navigate(['recipesList']);
  }

  constructor(private route: Router, private categoriesListService: CategoriesListService) {
    this.categoriesListService.model$.subscribe(this.updatecount.bind(this));
  }
  updatecount(msg) {
    this.backBtn = msg;
  }
}
