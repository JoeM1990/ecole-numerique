import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ErrorComponent } from "src/presentation/dialog/error/error.component";
import { UserLoginUseCase } from "./user-login.usecase";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { NgxEncryptCookieService } from "ngx-encrypt-cookie";
@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    private isAuthenticated = false;
    key:any;
   

    constructor(private router:Router, private dialog:MatDialog, private auth:UserLoginUseCase,
         private cookie:NgxEncryptCookieService,) { }

    login(email:any, password:any){
        this.auth.execute({email,password}).subscribe((res)=>{
            //localStorage.setItem('token',res.accessToken);
            //window.sessionStorage.setItem('token',res.accessToken);
            this.key = this.cookie.generateKey();
            this.cookie.set('key_app',this.key,false);
            this.cookie.set('token',res.accessToken,true,this.key);

            //console.log(this.cookie.get('token',true,this.cookie.get('key_app',false)));
            
            // this.cookieService.set('token', res.accessToken, {secure: true});
           this.router.navigate(['/dashboard']);
           
              }, (err:HttpErrorResponse) => {
                let refDialog = this.dialog.open(ErrorComponent,{data:err.error.message});
                refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
                
            }
          )
    }

    checkLogin():boolean{
        this.isAuthenticated = true;
        return !! this.cookie.get('token',false);
    }

    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }
  
    logout(){
        this.cookie.deleteAll()
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
