import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RecipesListComponent } from './recipes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListService } from '../shared/categories-list.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

class RouterStub {
  navigate(url) {

  }
}

fdescribe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [RecipesListComponent],
      providers: [CategoriesListService,
        {
          provide: Router,
          useClass: RouterStub
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(CategoriesListService);
    let store = {};
    const mockLocalStorage = {

      setItem: (key: any, value: any) => {
        store[key] = `${value}`;
      }
    }

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load receipe details', () => {
    let service = fixture.debugElement.injector.get(CategoriesListService);
    spyOn(service, 'getCategories').and.callFake(() => {
      return Observable.from([[1, 3, 2]]);
    });
  })
  it('it should navigate to recipe details page if we click on recipe', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.onSelect('');
    expect(spy).toHaveBeenCalledWith(['recipeDetails']);

  });


});
