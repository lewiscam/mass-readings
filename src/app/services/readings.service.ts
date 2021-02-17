import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  constructor() { }

  loadPage(day: 'today' | 'sunday') {
const oldElement = document.getElementById("universalis-js");
if (oldElement && oldElement.parentNode) {
oldElement.parentNode.removeChild(oldElement);
}
    const script = document.createElement('script');
  script.src = `assets/universalis-${day}.js`;
  document.head.appendChild(script);
  }
}
