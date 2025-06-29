import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
  ApexLegend,
  ApexPlotOptions,
} from 'ng-apexcharts';
import {
  ApexFill,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexDataLabels,
} from 'ng-apexcharts';
import { LoaderService } from '../../Services/loader.service';
import { CommonModule } from '@angular/common';
export type RadialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend?: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  public chartOptions: ChartOptions;
  public radialBar: RadialChartOptions;

  constructor(public loaderService: LoaderService) {
    // Chart data for Bar Grapgh
    this.chartOptions = {
      colors: ['#2C5BCC', '#886FCE', '#F8F5FE'],
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 13, 27],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 11, 17, 15, 15, 21, 14],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 44, 55, 41, 67, 22, 43],
        },
      ],
      chart: {
        type: 'bar',
        height: 270,
        stacked: true,
        width: 1400,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Security rating',
          style: {
            color: '#333',
            fontSize: '14px',
            fontWeight: 'bold',
          },
        },
      },

      xaxis: {
        type: 'datetime',
        categories: [
          '2011-01-01T00:00:00.000Z',
          '2011-02-01T00:00:00.000Z',
          '2011-03-01T00:00:00.000Z',
          '2011-04-01T00:00:00.000Z',
          '2011-05-01T00:00:00.000Z',
          '2011-06-01T00:00:00.000Z',
          '2011-07-01T00:00:00.000Z',
          '2011-08-01T00:00:00.000Z',
          '2011-09-01T00:00:00.000Z',
          '2011-10-01T00:00:00.000Z',
          '2011-11-01T00:00:00.000Z',
          '2011-12-01T00:00:00.000Z',
        ],
        title: {
          text: 'Month',
          style: {
            color: '#333',
            fontSize: '14px',
            fontWeight: 'bold',
          },
        },
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM',
            day: 'dd',
            hour: 'HH:mm',
          },
        },
      },
    };
    // Chart data for Radial Bar
    this.radialBar = {
      series: [75],
      chart: {
        height: 240,
        width: 350,
        type: 'radialBar',
      },
      labels: ['Points'],
      colors: ['#20E647'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '70%',
          },
          track: {
            background: '#f0f0f0',
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
              fontSize: '24px',
              offsetY: 10,
              formatter: function (val: number) {
                return val.toFixed(0);
              },
            },
          },
        },
      },
      fill: {
        type: 'solid',
        colors: ['#886FCE'],
      },
      stroke: {
        lineCap: 'round',
      },
    };
  }
}
