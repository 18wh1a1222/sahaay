import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged: any;
  constructor() { 
    this.isUserLogged = false;
   }

   setuserLoggedIn(): void {
     this.isUserLogged = true;
   }

   setuserLoggedOut(): void {
    this.isUserLogged = false;
  }

   getUserLogged(): any{
     return this.isUserLogged;
   }
}
