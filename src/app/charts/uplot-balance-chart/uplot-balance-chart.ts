
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import type uPlot from 'uplot';

@Component({
  selector: 'app-uplot-balance-chart',
  standalone: true,
  template: `
    <div class="chart-container">
      <h2>Account Balance</h2>
      <div #chartHost class="chart-host"></div>
    </div>
  `,
  styleUrl: './uplot-balance-chart.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UplotBalanceChartComponent
  implements AfterViewInit, OnDestroy {

  @ViewChild('chartHost')
  chartHost!: ElementRef<HTMLDivElement>;

  private chart?: uPlot;
  private resizeObserver?: ResizeObserver;

  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    // Don't initialize uPlot during server-side rendering.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    void this.createChart();
  }

  private async createChart(): Promise<void> {

    // Dynamically load uPlot only in the browser.
    const { default: UPlot } = await import('uplot');

    const host = this.chartHost.nativeElement;

    const data: uPlot.AlignedData = [
      [
        Date.UTC(2026, 10, 10) / 1000,
        Date.UTC(2026, 10, 11) / 1000,
        Date.UTC(2026, 10, 12) / 1000,
        Date.UTC(2026, 10, 13) / 1000,
        Date.UTC(2026, 10, 14) / 1000,
        Date.UTC(2026, 10, 15) / 1000,
        Date.UTC(2026, 10, 16) / 1000
      ],
      [8500, 9000, 8700, 9800, 9500, 11000, 12450]
    ];

    this.chart = new UPlot(
      {
        width: host.clientWidth || 600,
        height: 320,

        series: [
          {},
          {
            label: 'Balance',
            stroke: '#2563eb',
            width: 2,
            points: {
              show: true
            }
          }
        ],

        scales: {
          x: {
            time: true
          }
        }
      },
      data,
      host
    );

    this.resizeObserver = new ResizeObserver(entries => {
      const width = entries[0]?.contentRect.width;

      if (width && this.chart) {
        this.chart.setSize({
          width,
          height: 320
        });
      }
    });

    this.resizeObserver.observe(host);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.chart?.destroy();
  }
}
