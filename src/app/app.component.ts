import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  backBtn: boolean= false;

  back()
  {
    this.route.navigate(['recipesList']);
    // localStorage.clear();
  }

  constructor(private route:Router)
  {
    
  }
}
