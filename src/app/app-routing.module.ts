import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SundayReadingsComponent } from './sunday-readings/sunday-readings.component';
import { TodayReadingsComponent } from './today-readings/today-readings.component';

const routes: Routes = [
  {
    path: 'today',
    component: TodayReadingsComponent
  },
  {
    path: 'sunday',
    component: SundayReadingsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
