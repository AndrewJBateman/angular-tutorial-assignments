import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() num: number; /*input number with () makes it bindable from outside*/

  constructor() { }

  ngOnInit() {
  }

}
