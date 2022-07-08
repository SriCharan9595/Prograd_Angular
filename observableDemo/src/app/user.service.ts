import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IUsers } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:9000/admin/getFoodies";

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUsers>{
    return this.http.get<IUsers>('http://localhost:9000/admin/getFoodies');
  }
}
