import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-coverage-platform',
  templateUrl: './coverage-platform.component.html',
  styleUrls: ['./coverage-platform.component.scss'],
})
export class CoveragePlatformComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptionsGauge1: Highcharts.Options = this.getChartOptions(
    41,
    'Spend Verified',
    '#448782'
  );
  chartOptionsGauge2: Highcharts.Options = this.getChartOptions(
    61,
    'Industry Average',
    'grey'
  );

  coverageList = this.getCoverageList();

  constructor() {}

  ngOnInit(): void {}

  getChartOptions(yAxis: number, text: string, colorValue: string): any {
    return {
      chart: {
        type: 'solidgauge',
      },
      title: {
        text,
        align: 'center',
        x: 0,
        verticalAlign: 'top',
        y: 0,
        // floating: true,
        // spacingTop: 100,
        style: {
          color: '##939393',
          fontSize: '10px',
        },
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            backgroundColor: '#EEE',
            outerRadius: '112%',
            innerRadius: '100%',
            borderWidth: 0,
          },
        ],
      },
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: true,
            verticalAlign: 'middle',
          },
        },
      },
      series: [
        {
          showInLegend: false,
          data: [
            {
              color: colorValue,
              radius: '112%',
              innerRadius: '100%',
              y: yAxis,
              dataLabels: {
                y: 0,
                format: '{y}%',
                borderWidth: 0,
                style: {
                  fontSize: '15px',
                },
              },
            },
          ],
        } as Highcharts.SeriesOptionsType,
      ],
    };
  }

  getCoverageList(): Array<{ icon: string; percentage: number }> {
    return [
      {
        icon: 'fa-google',
        percentage: 81,
      },
      {
        icon: 'fa-facebook',
        percentage: 66,
      },
      {
        icon: 'fa-telegram',
        percentage: 59,
      },
      {
        icon: 'fa-twitter',
        percentage: 54,
      },
      {
        icon: 'fa-linkedin',
        percentage: 50,
      },
      {
        icon: 'fa-instagram',
        percentage: 46,
      },
      {
        icon: 'fa-whatsapp',
        percentage: 41,
      },
      {
        icon: 'fa-windows',
        percentage: 28,
      },
      {
        icon: 'fa-telegram',
        percentage: 26,
      },
      {
        icon: 'fa-twitter',
        percentage: 16,
      },
    ];
  }
}
