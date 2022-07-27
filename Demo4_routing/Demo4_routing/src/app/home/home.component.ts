import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = "Bienvenue sur Angular ! =D";
  text: string = "Le lion ne s'associe pas avec le cafard !";
  isHidden: boolean = false;
  name: string = "";
  fruits: string[] = [];
  age: number = 21;
  titleFlag: string = "";

  // Injection du service dans le constructeur de mon composant
  constructor(private dataSrv: DataService, private router: Router) {
    console.log("component");
    // Récupération d'une variable de mon service
    this.fruits = this.dataSrv.fruits;
    // Appel d'une méthode de mon service
    this.dataSrv.afficherFruits();
  }

  ngOnInit() {
  }

  hideText() {
    this.isHidden = !this.isHidden;
  }

  navigate() {
    this.router.navigate(['/drapeau', this.titleFlag]);
  }
}
