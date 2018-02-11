import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesListService {
  private categoriessUrl = 'http://www.themealdb.com/api/json/v1/1/search.php?s';

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoriessUrl).map((response: Response) => response.json());
  }

}
