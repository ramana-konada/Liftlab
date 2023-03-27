import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import {
  HighchartsChartComponent,
  HighchartsChartModule,
} from 'highcharts-angular';

import { BreakdownByCategoriesComponent } from './breakdown-by-categories/breakdown-by-categories.component';
import { CoveragePlatformComponent } from './coverage-platform/coverage-platform.component';
import { ExecutiveGridComponent } from './executive-grid/executive-grid.component';
import { ExecutiveHeaderComponent } from './executive-header/executive-header.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { NeedOfAttentionComponent } from './need-of-attention/need-of-attention.component';

const components = [
  ExecutiveHeaderComponent,
  ExecutiveSummaryComponent,
  NeedOfAttentionComponent,
  CoveragePlatformComponent,
  BreakdownByCategoriesComponent,
  ExecutiveGridComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HighchartsChartModule,
    AgGridModule,
    HttpClientModule,
  ],
  exports: [...components],
  providers: [],
})
export class ExecutiveModule {}
