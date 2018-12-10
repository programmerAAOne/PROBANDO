import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email == "luis@gmail.com" && password == "12345") {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    return this.isLoggedIn;
  }

  logout(): boolean {
    return this.isLoggedIn = false;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

}
