import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'food'
})

export class FoodPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    if(isNaN(value))
      return "";
      
    let [price] = args
    return value*price;
  }

}
