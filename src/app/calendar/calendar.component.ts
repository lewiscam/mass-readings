import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() day = new Date().toISOString();
  calendar = (window as any).Romcal.calendarFor();
  calendarForToday!: any;

  constructor() { }

  ngOnInit(): void {
    this.calendarForToday = this.calendar.filter((item: any) => item.moment.substring(0,10) === this.day.substring(0,10) )[0]
  }

}
