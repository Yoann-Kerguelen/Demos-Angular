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

  hideText() {
    this.isHidden = !this.isHidden;
  }
}
