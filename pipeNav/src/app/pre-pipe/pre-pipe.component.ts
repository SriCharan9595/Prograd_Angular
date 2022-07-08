import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-pipe',
  templateUrl: './pre-pipe.component.html',
  styleUrls: ['./pre-pipe.component.css']
})
export class PrePipeComponent implements OnInit {

  constructor() { }

  foodItem!:string

  ngOnInit(): void {
  }

}
