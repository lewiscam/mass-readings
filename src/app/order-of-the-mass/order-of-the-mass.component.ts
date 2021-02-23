import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-of-the-mass',
  templateUrl: './order-of-the-mass.component.html',
  styleUrls: ['./order-of-the-mass.component.scss']
})
export class OrderOfTheMassComponent implements OnInit {
  kyrie = 'kyrieLong';
  gloria = true;
  creed = 'niceneCreed';
  eucharisticPrayer = 'eucharisticPrayer1';
  showPrefaces = false;
  preface = 'preface40';
  communicantes = 'communicantes0';
  teErgo = 'teErgo0';

  constructor() { }

  ngOnInit(): void {
  }

  selectedKyrie(value: string) {
    this.kyrie = value;
  }

  selectedGloria(value: string) {
    this.gloria = !!(value === 'true')
  }

  selectedCreed(value: string) {
    this.creed = value;
  }

  selectedEucharisticPrayer(value: string) {
    this.eucharisticPrayer = value;
    const valueAsNumber = parseInt(value.replace("eucharisticPrayer", ""))
    if (valueAsNumber !== 4 && valueAsNumber < 7) {
      this.showPrefaces = true;
      switch(valueAsNumber) {
  case 2:
    this.preface = 'preface51'
    break;
  case 5:
    this.preface = 'preface52'
    break;
    case 6:
    this.preface = 'preface53'
    break;
  default:
    this.preface = 'preface40'
}
    }
  }

  selectedPreface(value: string) {
    this.preface = value;
  }

  selectedCommunicantes(value: string) {
    this.communicantes = value;
    if (value === 'communicante3') {
      this.teErgo === 'teErgo3'
    } else if (value === 'communicante4') {
      this.teErgo === 'teErgo4'
    } else {
      this.teErgo === 'teErgo0'
    }
  }

}
