import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-balance-chart',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './balance-chart.html',
  styleUrl: './balance-chart.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceChartComponent {

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      height: 320,
      backgroundColor: 'transparent'
    },

    title: {
      text: undefined
    },

    credits: {
      enabled: false
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },

    yAxis: {
      title: {
        text: undefined
      }
    },

    series: [
      {
        type: 'spline',
        name: 'Account balance',
        color: '#16a34a',
        data: [8500, 9000, 8700, 9800, 9500, 11000, 12450]
      }
    ]
  };
}