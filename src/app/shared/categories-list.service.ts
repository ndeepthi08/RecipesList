import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Inject } from '@angular/core';


@Injectable()
export class CategoriesListService {
  private categoriessUrl = 'http://www.themealdb.com/api/json/v1/1/search.php?s';
  
  private model = new Subject<any>();
  model$ = this.model.asObservable();
  modelData(data) {
    this.model.next(data);
  }

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoriessUrl).map((response: Response) => response.json());
  }

}
