import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  addingOneToNResult = "--";
  binarySearchResult = "--";

  constructor() { }

  ngOnInit() {
  }
  //
  //Function to check if an array is made up only of numbers
  //
  numberArrayChecker(arr: string)
  {

    let inputArray = arr.split(/\,\s+/);
    let arrayCheck = 0;
    let checkArray = inputArray.join('');
    let doubleCheckArray = checkArray.split('');
    for(let i = 0; i < doubleCheckArray.length; i++)
    {
      if(isNaN(parseInt(doubleCheckArray[i])) && doubleCheckArray[i] != ',')
      {
        arrayCheck = arrayCheck + 1;
      }
    }
    if(arrayCheck > 0)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  //*************
  //Simple algorithm to sum a number
  //*************
  addingOneToN(num: number)
  {
    if(num <= 0)
    {
      return 0;
    }
    return num + this.addingOneToN(num - 1);
  }
  initAddingOneToN(input: string)
  {
    let inputNumber = parseInt(input);
    let result = this.addingOneToN(inputNumber);
    this.addingOneToNResult = "For " + input + " the answer is " + result;
  }
  //*************
  //Binary Search including functionality to sort a list first (Binary Search requires a sorted list)
  //*************
  //This function helps with sorting numbers properly
  numberSort(a: any, b: any)
  {
    let commas = /[,]/g
    a = a.replace(commas,'');
    b = b.replace(commas,'');    
    return a - b;
  }
  initBinarySearch(arr: string, input: string)
  {
    if(this.numberArrayChecker(arr))
    {
      let numberInput = parseInt(input);
      let inputArray = arr.split(/\,\s+/);
      let numberArray = inputArray.sort(this.numberSort);
      let displayArray = numberArray.join(', ');
      let endOfArray = numberArray.length - 1;
      let result = this.binarySearch(numberArray, 0, endOfArray, numberInput);
      if(result >= 0)
      {
        this.binarySearchResult = "Within the sorted list of numbers " + displayArray + " the number " + input + " is at array possition " + result +".";
      }
      else
      {
        this.binarySearchResult = "Within the sorted list of numbers " + displayArray + " the number " + input + " is not present."
      }
    }
    else
    {
      this.binarySearchResult = "Invalid list, please try again.";
    }
  }
  binarySearch(sortedList, start, end, toFind)
  {
    if(end >= start)
    {
      let mid = start + Math.floor((end - start)/2);
      if(sortedList[mid] == toFind)
      {
        return mid;
      }
      if(sortedList[mid] > toFind)
      {
        return this.binarySearch(sortedList, start, mid-1, toFind);
      }
      else
      {
        return this.binarySearch(sortedList, mid+1, end, toFind);
      }
    }
    return -1;
  }

}
