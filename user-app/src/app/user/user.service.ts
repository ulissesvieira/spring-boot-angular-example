import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http : Http) {
    
  }

  findAll() : Observable<User[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id : number) : Observable<User> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw(error.json().error || 'Error'));
  }

  saveUser(user : User) : Observable<User> {
    return this.http.post(this.apiUrl, user)
      .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUserById(id : number) : Observable<Boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(user : User) : Observable<User> {
    return this.http.put(this.apiUrl, user)
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }  
}
