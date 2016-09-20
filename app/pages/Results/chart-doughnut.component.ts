import { Component } from '@angular/core';

//width:70%; height: 70%;

@Component({
  selector: 'my-chart-doughnut',
  styles: [`
    .chart {
      display: block; 
    }
  `],
  template: `
     <base-chart
     class="chart"
      [data]="doughnutChartData"
                [labels]="doughnutChartLabels"
                [chartType]="doughnutChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)">
     </base-chart>
  ` 
})
export class Chartsdoughnut {
 // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
