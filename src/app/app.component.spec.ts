import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router,RouterOutlet} from '@angular/router'
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from '@angular/router/testing'
import { CategoriesListService } from './shared/categories-list.service';
import { HttpModule } from '@angular/http';
class RouterStub 
{
  navigate(url)
  {

  }
}

fdescribe('AppComponent', () => {
  let component:AppComponent ;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule.withRoutes([]), HttpModule],
      declarations: [
        AppComponent
      ], 
      providers : [{
        provide: Router,
        useClass: RouterStub,

    }, CategoriesListService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('it should navigate to recipe page if we click on back ',()=>
  {
      let router = TestBed.get(Router);
      let spy = spyOn(router,'navigate');
     component.back();
     expect(spy).toHaveBeenCalledWith(['recipesList']);
     
  });

  it('it should have a router outlet',()=> {
    let de =fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull();
  })
 
});
