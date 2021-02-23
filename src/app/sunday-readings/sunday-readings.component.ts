import { Component, Input, OnInit } from '@angular/core';
import { ReadingsService } from '../services/readings.service';

@Component({
  selector: 'app-sunday-readings',
  templateUrl: './sunday-readings.component.html',
  styleUrls: ['./sunday-readings.component.scss']
})
export class SundayReadingsComponent implements OnInit {
  @Input() isMass = false;
  nextSunday = this.getNextSunday();

  constructor(private readingService: ReadingsService) {
    this.readingService.loadPage('sunday')
   }

  ngOnInit(): void {
  }

  getNextSunday() {
    var d = new Date();
    d.setDate(d.getDate() + (6+ 7 - d.getDay()) % 7);
    return d.toISOString();
  }

}
