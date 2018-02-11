import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailsComponent } from './recipe-details.component';
import { CategoriesListService } from '../shared/categories-list.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

fdescribe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;
  let service: CategoriesListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [RecipeDetailsComponent],
      providers: [CategoriesListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get recipe details from localStorage',
    () => {
      localStorage.setItem('id', 'something');
      expect(localStorage.getItem('id')).toEqual('something');
    });
})

