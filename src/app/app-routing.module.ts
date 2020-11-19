import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherBodyComponent} from './pages/weather-body/weather-body.component';

const routes: Routes = [
  {
    path: ':region',
    component: WeatherBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
