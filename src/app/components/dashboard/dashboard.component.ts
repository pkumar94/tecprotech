import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
   selector: 'dashboard',
   templateUrl: 'dashboard.component.html',
   styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
   opened = true;

   // -------------- bar chart starts --------------
   highcharts = Highcharts;
   chartOptions = {
      chart: {
         type: 'column'
      },
      title: {
         text: 'Monthly Earned Commission'
      },
      subtitle: {
         text: ''
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         crosshair: true
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Earned Commission (USD)'
         }
      },
      tooltip: {
         headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:.1f} $</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
      },
      plotOptions: {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
      series: [{
         name: 'Commission',
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      },
      ]
   };
   // -------------- bar chart ends --------

   // -------------- sales bar chart starts --------------
   highchartsSales = Highcharts;
   chartOptionsSales = {
      chart: {
         type: 'column'
      },
      title: {
         text: 'Monthly Sales Completed'
      },
      subtitle: {
         text: ''
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         crosshair: true
      },
      yAxis: {
         min: 0,
         title: { text: 'Sales Completed'}
      },
      tooltip: {
         headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:f} </b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
      },
      plotOptions: {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
      series: [{
         name: 'Sales',
         data: [106, 150, 72, 129, 144, 176, 135, 194, 148, 216, 95, 254]
      },
      ]
   };
   // -------------- sales bar chart ends --------
}
