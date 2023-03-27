import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownByCategoriesComponent } from './breakdown-by-categories.component';

describe('BreakdownByCategoriesComponent', () => {
  let component: BreakdownByCategoriesComponent;
  let fixture: ComponentFixture<BreakdownByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakdownByCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakdownByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
