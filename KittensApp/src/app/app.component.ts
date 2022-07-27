import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KittensApp';
  urls: string[] = [];
  i: number = -1;

  constructor(private dataSrv: DataService) {

  }

  getPreviousCat() {
    this.i--;
  }

  getNextCat() {
    this.dataSrv.getCat().subscribe({
      next: (result: any) => {
        if (this.i < this.urls.length - 1) {
          this.i++;
        } else {
          this.urls.push(result.message);
          this.i++;
        }
      }
    })
  }

}
