import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCategoryComponent } from './men-category.component';

describe('MenCategoryComponent', () => {
  let component: MenCategoryComponent;
  let fixture: ComponentFixture<MenCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
