import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import io from 'socket.io-client';

import {Router} from '@angular/router';

const socket = io('http://localhost:3002');



@Component({
  selector: 'app-medium-prioritygraph',
  templateUrl: './medium-prioritygraph.component.html',
  styleUrls: ['./medium-prioritygraph.component.css']
})
export class MediumPrioritygraphComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;
  minimalist:any;

  data1 = [];



  ngOnInit() {

    socket.on('data1', (res) => {
      this.updateChartData(this.chart, res, 0);
      this.updateChartData(this.doughnut,res.slice(0,5), 0);
    })

    socket.on('data2', (res) => {
      this.updateChartData(this.chart, res, 1);
    })
    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }

           
        }
      }
    };
    // this.doughnut =  new Chart('doughnut',{
    //   type: 'doughnut',
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       text: 'Doughnut Chart'
    //     },legend: {
		// 			position: 'top',
		// 		},animation: {
		// 			animateScale: true,
		// 			animateRotate: true
		// 		}
    //   },
    //   data: {
		// 		datasets: [{
    //       //data: [45,10,5,25,15],
    //       data: [50,50],
		// 			//backgroundColor: ["red","orange","yellow","green","blue"],
    //       backgroundColor: ["red"],
    //       label: 'Dataset 1'
		// 		}],
		// 		//labels: ['Red','Orange','Yellow','Green','Blue']
		// 	}
    // })
    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'medium priority'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
          //data: [45,10,5,25,15],
          data: [30,70],
					//backgroundColor: ["red","orange","yellow","green","blue"],
          backgroundColor: ["blue"],
          label: 'Dataset 1'
				}],
				//labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })
}

  addData(chart, label, data) {
    chart.data.labels.push(label); 
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex){
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}


gotopage()
{
  
  this.router.navigate(['/mediumprioritylist']);
}

}

