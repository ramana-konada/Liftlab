import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveHeaderComponent } from './executive-header.component';

describe('ExecutiveHeaderComponent', () => {
  let component: ExecutiveHeaderComponent;
  let fixture: ComponentFixture<ExecutiveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
