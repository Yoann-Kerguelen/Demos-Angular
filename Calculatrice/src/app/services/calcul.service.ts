import { Injectable } from '@angular/core';
import { Calcul } from '../models/calcul';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  calcul!: Calcul;

  constructor() {
    this.calcul = new Calcul();
  }

  addition(a: number, b: number) {
    return this.calcul.addition(a, b);
  }

  soustraction(a: number, b: number) {
    return this.calcul.soustraction(a, b);
  }
  multiplication(a: number, b: number) {
    return this.calcul.multiplication(a, b);
  }

  division(a: number, b: number) {
    return this.calcul.division(a, b);
  }

  modulo(a: number, b: number) {
    return this.calcul.modulo(a, b);
  }
}
