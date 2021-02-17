import { Component, OnInit } from '@angular/core';
import { ReadingsService } from '../services/readings.service';

@Component({
  selector: 'app-today-readings',
  templateUrl: './today-readings.component.html',
  styleUrls: ['./today-readings.component.scss']
})
export class TodayReadingsComponent implements OnInit {

  constructor(private readingService: ReadingsService) {
    this.readingService.loadPage('today');
  }

  ngOnInit(): void {
  }

}
