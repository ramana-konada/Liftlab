import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePlatformComponent } from './coverage-platform.component';

describe('CoveragePlatformComponent', () => {
  let component: CoveragePlatformComponent;
  let fixture: ComponentFixture<CoveragePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragePlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoveragePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
