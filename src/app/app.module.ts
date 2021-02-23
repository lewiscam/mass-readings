import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SundayReadingsComponent } from './sunday-readings/sunday-readings.component';
import { TodayReadingsComponent } from './today-readings/today-readings.component';
import { AngularMaterialModule } from './material-theme/angular-material.module';
import { OrderOfTheMassComponent } from './order-of-the-mass/order-of-the-mass.component';
import { GraphQLModule } from './apollo/graphql.module';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SundayReadingsComponent,
    TodayReadingsComponent,
    OrderOfTheMassComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularMaterialModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
