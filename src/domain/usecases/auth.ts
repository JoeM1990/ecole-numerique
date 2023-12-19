import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ErrorComponent } from "src/presentation/dialog/error/error.component";
import { UserLoginUseCase } from "./user-login.usecase";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {CookieService} from 'ngx-cookie-service';
import {NgxSecureCookieService} from 'ngx-secure-cookie'
@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    private isAuthenticated = false;
    key:any;
   
    // this.cookie.set("test","test value",true,key);

    constructor(private router:Router, private dialog:MatDialog, private auth:UserLoginUseCase,
        private cookieService: CookieService, private cookie:NgxSecureCookieService,) { }

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
        return !! this.cookieService.get('token');
    }

    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }
  
    logout(){
        this.cookieService.delete('token');
        this.cookieService.delete('key_app');
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
