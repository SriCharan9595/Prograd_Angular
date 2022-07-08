import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-pipe',
  templateUrl: './own-pipe.component.html',
  styleUrls: ['./own-pipe.component.css']
})
export class OwnPipeComponent implements OnInit {

  constructor() { }

  userBill:number = 0;

  ngOnInit(): void {
  }

}
