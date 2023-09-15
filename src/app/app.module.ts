import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './views/charts/charts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './components/chart/chart.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ChartComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
