import { Component, OnInit } from '@angular/core';
import { ReadingsService } from '../services/readings.service';

@Component({
  selector: 'app-sunday-readings',
  templateUrl: './sunday-readings.component.html',
  styleUrls: ['./sunday-readings.component.scss']
})
export class SundayReadingsComponent implements OnInit {

  constructor(private readingService: ReadingsService) {
    this.readingService.loadPage('sunday')
   }

  ngOnInit(): void {
  }

}
