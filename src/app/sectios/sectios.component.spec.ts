import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiosComponent } from './sectios.component';

describe('SectiosComponent', () => {
  let component: SectiosComponent;
  let fixture: ComponentFixture<SectiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
