import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';

import { ExecutiveGridComponent } from './executive-grid.component';

describe('ExecutiveGridComponent', () => {
  let component: ExecutiveGridComponent;
  let fixture: ComponentFixture<ExecutiveGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutiveGridComponent],
      imports: [AgGridModule],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
