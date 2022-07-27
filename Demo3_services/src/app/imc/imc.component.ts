import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {

  size: number = 0;
  weight: number = 0;
  imc: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcIMC() {
    this.imc = this.weight / (this.size * this.size);
  }

}
