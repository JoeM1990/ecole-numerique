import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class Auth {

    private isAuthenticated = false;

    constructor(private router:Router) { }

    checkLogin():boolean{
        this.isAuthenticated = true;
        return !! localStorage.getItem('token');
    }

      isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
      }
  
  
    logout(){
        localStorage.removeItem('token');
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
      }


}
