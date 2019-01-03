import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  addingonetonresult = "--";

  constructor() { }

  ngOnInit() {
  }

  addingOneToN(n: number)
  {
    if(n <= 0)
    {
      return 0;
    }
    return n + this.addingOneToN(n - 1);
  }

  initAddingOneToN(n: string)
  {
    let inputNumber = parseInt(n);
    let result = this.addingOneToN(inputNumber);
    this.addingonetonresult = "For " + n + " the answer is " + result;
  }
}
