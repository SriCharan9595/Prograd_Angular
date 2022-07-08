import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit { 
  // constructor() { }


//   myObservable = new Observable((observer)=> 
//   {
//     console.log('Observable starts from here...');
//     setTimeout(()=>{observer.next('Kurapati')},2000),
//     setTimeout(()=>{observer.next('Sri')},3000),
//     setTimeout(()=>{observer.next('Charan')},5000)
//   }
// );

//   ngOnInit(): void {
//     this.myObservable.subscribe((value)=>{console.log(value)})
//   }


    // myObservable = of('Kurapati','Sri','Charan')
    // myObserver = {
    //   next:(value:string)=>console.log(value),
    //   error:(err:Error)=>console.log(err),
    //   complete:()=>console.log('My name is sucessfully printed...')
    // };

    // ngOnInit(): void {
    //   this.myObservable.subscribe(this.myObserver)
    // }


    // myObservable = of('Kurapati','Sri','Charan')
    // myObserver = {
    //   next:(value:string)=>console.log(value),
    //   error:(err:Error)=>console.log(err),
    //   complete:()=>console.log('My name is sucessfully printed...')
    // };

    // ngOnInit(): void {
    //   this.myObservable.subscribe(this.myObserver)
    //   setTimeout(()=>{
    //     this.myObservable.subscribe({
    //       next(name) {console.log("2nd Subscription "+name);},
    //       complete() {console.log("2nd Subscription completed");}
    //     })
    //   },3000)
    // }


    // ngOnInit(): void {
    //   const secondsCounter = interval(1000);
    //   const subscription = secondsCounter.subscribe(n =>
    //   console.log(`Subscription started by ${n + 1} seconds ago..!`));
    // } 
    
    ngOnInit(): void {
      const el = document.getElementById('element')!;
      const mouseMove = fromEvent<MouseEvent>(el, 'mousemove');
      mouseMove.subscribe((e)=>{
        console.log('Event triggered');
      })
    }
    
}  
