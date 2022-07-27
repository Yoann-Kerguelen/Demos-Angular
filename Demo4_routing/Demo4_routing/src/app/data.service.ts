import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fruits: string[] = ["framboise", "fraise", "cerise", "ananas", "kiwi"];

  constructor() {
    console.log("Service");
  }

  afficherFruits() {
    console.log(this.fruits);
  }
}
