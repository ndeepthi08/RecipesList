import { TestBed, inject } from '@angular/core/testing';

import { CategoriesListService } from './categories-list.service';
import { HttpModule } from '@angular/http';

fdescribe('CategoriesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [CategoriesListService]
    });
  });

  it('should be created', inject([CategoriesListService], (service: CategoriesListService) => {
    expect(service).toBeTruthy();
  }));
});
