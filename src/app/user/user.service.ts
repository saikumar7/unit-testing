import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {"name": "Jane", "age": 30},
    {"name": "John", "age": 35},
  ]

  public getUsers(): Observable<any> {
    return of(this.users);
  }
}
