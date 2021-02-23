import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { OrderOfTheMassComponent } from './order-of-the-mass/order-of-the-mass.component';
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
  {
    path: 'order-of-the-mass',
    component: OrderOfTheMassComponent
  },
    { path: '', redirectTo: '/today', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
