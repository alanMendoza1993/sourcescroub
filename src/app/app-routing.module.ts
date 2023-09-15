import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './views/charts/charts.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

const routes: Routes = [{ path: 'charts', component: ChartsComponent},
{ path: 'welcome', component: WelcomeComponent},
{ path: '**', redirectTo: 'welcome'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
