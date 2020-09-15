import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  num: number;
  answer: string;

  constructor() { }

  ngOnInit(): void {
    this.num = this.random(0, 100);
  }

  random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min  + 1)) + min;
  }

  even() {
    return 'Is number ' + this.num + ' even?';
  }

  yes() {
    if (this.num % 2 !== 0) {
      return alert("Sorry! It's incorrect.");
    }
    return alert('Correct!');
  }

  no () {
    if (this.num % 2 !== 0) {
      return alert('Correct!')
    }
    return alert("Sorry! It's incorrect.");
  }

  reset() {
    this.num = this.random(0, 100);
    this.answer = null;
  }
}
