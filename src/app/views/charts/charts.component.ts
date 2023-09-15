import { Component } from '@angular/core';
import { UsaApiService } from 'src/app/services/usa-api.service';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { IUsaApi } from 'src/app/interfaces/general.interfaces';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})
export class ChartsComponent {
  options: Highcharts.Options;
  listStates: string[]=[];
  counter: number = 0;
  constructor(public srvUsaApi: UsaApiService, public router: Router) {
    this.initializeData()
  }
  async initializeData () {
    this.getPopulationByState();
  }
  async getPopulationByState() {
    this.srvUsaApi.getPopulation().subscribe((data: any)=>{
      this.segmentData(data.data);
    })
  }
  
  async segmentData(data: any) {
    let segment: any = {};
    const sortData = data.sort((a: IUsaApi, b: IUsaApi) => {
      return a['ID Year'] - b['ID Year'];
  });
    await Promise.all(sortData.map((stateYear:IUsaApi) => {
      const stepState = {
        data: [[stateYear['ID Year'], stateYear.Population]],
        type: 'line',
        name: stateYear.State
      }
      if(segment[stateYear['ID State']]) {
        
        segment[stateYear['ID State']].data.push([stateYear['ID Year'], stateYear.Population])
      } else {
        this.listStates.push(stateYear['ID State'])
        segment[stateYear['ID State']] = stepState

      }

    }))
    this.setOptions(segment)
  }
  setOptions(data: any) {
    this.options = {
      series: this.listStates.map((state: string)=> data[state]),
      title: {
        style: {
          color: 'orange'
        },
        text: 'Population by state'
      },     
    };
  }
  goBack() {
    this.router.navigateByUrl('/')
  }

}
