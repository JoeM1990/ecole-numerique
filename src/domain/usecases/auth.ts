import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ErrorComponent } from "src/presentation/dialog/error/error.component";

@Injectable({
    providedIn: 'root'
  })
export class Auth {

    private isAuthenticated = false;

    constructor(private router:Router, private dialog:MatDialog) { }

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

    redirect():boolean{
        let refDialog = this.dialog.open(ErrorComponent,{data:"Vous navez pas acces a ce systeme"});
        refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)});
        this.router.navigate(['/login']);
        return false;
    }

    


}
