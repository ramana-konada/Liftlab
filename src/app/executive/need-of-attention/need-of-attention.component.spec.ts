import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedOfAttentionComponent } from './need-of-attention.component';

describe('NeedOfAttentionComponent', () => {
  let component: NeedOfAttentionComponent;
  let fixture: ComponentFixture<NeedOfAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeedOfAttentionComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NeedOfAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check noaActive  property', () => {
    component.noaActive = false;

    expect(component.noaActive).toBeFalsy();
  });

  it('should check noaActive  property', () => {
    const response = [
      { name: 'Paid Search', value: '+51', percentageValue: '-30' },
      { name: 'Facebook Ads', value: '+37', percentageValue: '-10' },
      { name: 'Instagram', value: '+26', percentageValue: '+30' },
      { name: 'Text Search', value: '+14', percentageValue: '+30' },
      { name: 'Pinterest', value: '+3', percentageValue: '+30' },
    ];
    expect(component.overSpending).toEqual(response);
  });

  it('should check noaActive  property', () => {
    component.onSwitchChange({
      target: {
        checked: true,
      },
    });

    expect(component.noaActive).toBeTruthy();
  });
});
