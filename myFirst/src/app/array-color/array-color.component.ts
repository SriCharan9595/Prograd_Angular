import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-color',
  templateUrl: './array-color.component.html',
  styleUrls: ['./array-color.component.css']
})
export class ArrayColorComponent implements OnInit {
  intArr!:number[];
  constructor() { }

  ngOnInit(): void {
      this.intArr = [];
      for(let index=0;index<5;index++)
        this.intArr[index] = Math.floor(Math.random()*50);
  }

}
