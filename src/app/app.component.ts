import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Daily Mass Readings';

  constructor(private http: HttpClient) {
    this.http.get('https://universalis.com/USA/20210216/jsonpmass.js').subscribe(data => console.log(data))
  }
}
