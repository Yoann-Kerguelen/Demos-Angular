import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Bienvenue sur Angular ! =D";
  text: string = "Le lion ne s'associe pas avec le cafard !";
  isHidden: boolean = false;
  name: string = "";
  fruits: string[] = [];
  age: number = 21;

  // Injection du service dans le constructeur de mon composant
  constructor(private dataSrv: DataService) {
    console.log("component");
    // Récupération d'une variable de mon service
    this.fruits = this.dataSrv.fruits;
    // Appel d'une méthode de mon service
    this.dataSrv.afficherFruits();
  }

  hideText() {
    this.isHidden = !this.isHidden;
  }
}
