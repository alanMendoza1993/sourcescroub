import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})

export class ChartComponent {
  @Input() chartOptions: Highcharts.Options ;
  Highcharts: typeof Highcharts = Highcharts;
  
  constructor() {
    
  }
  
}
