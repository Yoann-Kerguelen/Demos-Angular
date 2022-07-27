import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  @Input()
  country: string = "";
  color1: string = "#0000ff";
  color2: string = "#ffffff";
  color3: string = "#ff0000";
  colorsTab: string[] = ["blue", "orange", "red", "green", "white", "black", "yellow"];


  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string, id: number) {
    let index = this.colorsTab.indexOf(color);
    index++;
    if (id == 1) {
      this.color1 = this.colorsTab[index];
    } else if (id == 2) {
      this.color2 = this.colorsTab[index];
    } else {
      this.color3 = this.colorsTab[index];
    }
  }
}
