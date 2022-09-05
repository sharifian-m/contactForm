import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBehaviorSubject$= new BehaviorSubject<any>('');
  public currentUser$= this.userBehaviorSubject$.asObservable();

  constructor() { }
  login(){
    
  }
setUserAuth(user:any){
this.userBehaviorSubject$.next(user);
}

checkUserAuth(){
  return !!localStorage.getItem('currentuseremail');
}
}
