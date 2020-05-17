import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  operation = ['+', '*', '-'];
  num1: number;
  num2: number;
  thisOperation: string;
  result: number;


  constructor() { }

  ngOnInit(): void {
    this.num1 = this.random(0, 100);
    this.num2 = this.random(0, 100);
    this.thisOperation = this.operation[this.random(0, this.operation.length-1)];
  }

  calculation() {
    return 'What is calc ' + this.num1 + this.thisOperation + this.num2 + ' ?';
  }

  ok() {
    let calc;
    switch(this.thisOperation) {
      case '+':
        calc = this.num1 + this.num2;
        break;

      case '*':
        calc = this.num1 * this.num2;
        break;

      case '-':
        calc = this.num1 - this.num2;
        break;
    }
    this.result == calc ? alert('Correct!') : alert("Sorry! It's incorrect.");
  }

  reset() {
    this.num1 = this.random(0, 100);
    this.num2 = this.random(0, 100);
    this.thisOperation = this.operation[this.random(0, this.operation.length-1)];
    this.result = null;
  }

  random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min  + 1)) + min;
  }
}
