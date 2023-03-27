import { Component } from '@angular/core';

@Component({
  selector: 'app-need-of-attention',
  templateUrl: './need-of-attention.component.html',
  styleUrls: ['./need-of-attention.component.scss'],
})
export class NeedOfAttentionComponent {
  noaActive = true;
  overSpending = [
    { name: 'Paid Search', value: '+51', percentageValue: '-30' },
    { name: 'Facebook Ads', value: '+37', percentageValue: '-10' },
    { name: 'Instagram', value: '+26', percentageValue: '+30' },
    { name: 'Text Search', value: '+14', percentageValue: '+30' },
    { name: 'Pinterest', value: '+3', percentageValue: '+30' },
  ];
  underSpending = [
    { name: 'LinkedIn', value: '+8', percentageValue: '+30' },
    { name: 'Reddit Ads', value: '-10', percentageValue: '+30' },
    { name: 'Twitter', value: '-33', percentageValue: '+30' },
    { name: 'Bing Search', value: '-11', percentageValue: '+30' },
    { name: 'Snapchat', value: '-4', percentageValue: '+30' },
  ];

  constructor() {}

  onSwitchChange(d: any): void {
    this.noaActive = d.target.checked;
  }
}
