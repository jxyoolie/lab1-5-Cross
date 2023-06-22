import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  n: number = 0;
  array: number[][] = [];

  constructor() {}

  makeArray(n: any) {
    this.array = [];
    try {
      this.n = parseInt(n);
      if (isNaN(this.n)) {
        throw new Error('Argument must be a number')
      }
      if (n <= 0) {
        throw new Error('Argument must be > 0')
      }
      let i: number = 0, j: number = 0;
      this.array = Array(this.n);
      console.log("The array was created");
      for (i = 0; i < this.n; i++) {
        this.array[i] = Array(this.n);
        for (j = 0; j < this.n; j++) {
          this.array[i][j] = Math.floor(Math.random() * 101) - 50;
        }
      }
    }
    catch(e) {
      console.log(e);
    }
  }

  doColor(a: number) {
    return a > 0 ? "green" : "red";
  }

}
