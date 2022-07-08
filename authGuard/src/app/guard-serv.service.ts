import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardServService {

  constructor() { }
  isLoggedIn():boolean{
    return false;
  }
}
