import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  secondes: number = 0;
  counterSubscription!: Subscription;
  firstname: string = "";
  lastname: string = "";

  constructor(private dataSrv: DataService) {
  
  }

  getName() {
    console.log("I");
    this.dataSrv.getPeople().subscribe({
      next: (result: any) => {
        console.log("II");
        console.log(result);
        this.firstname = result.results[0].name.first;
        this.lastname = result.results[0].name.last;
      }, error: (error) => {
        console.log(error);
      }
    });
    console.log("III");
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe({
      next: (value) => {
        this.secondes = value;
      },
      error: (error) => {
        console.log("Erreur : " + error);
      },
      complete: () => {
        console.log("Observable terminé !");
      }
    });
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
