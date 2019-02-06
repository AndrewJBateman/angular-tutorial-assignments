import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  ref = null;

  constructor() { }

  onStartGame() {
    if (this.ref === null) {
      this.count = 0;
      this.ref = setInterval(() => {
        this.count++;
      }, 1000); // count every second
    }
  }

  onStopGame() {
    clearInterval(this.ref);
    this.ref = null;
    this.count = 0;
  }

  NumberToArray(num: number) {
    console.log(Array(num).fill(null).map((x, i) => i));
    return Array(num)
      .fill(null) // populates the array
      .map(function(x, i) {
        return i; // returns [0,1,2,3...]
      });
  }

  ngOnInit() {
  }
}
