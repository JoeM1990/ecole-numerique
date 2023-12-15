import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import {UserLoginUseCase} from '../usecases/user-login.usecase'
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../presentation/dialog/error/error.component';
import {Auth} from '../usecases/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateFn {

  constructor(private auth:Auth, private router:Router, private dialog:MatDialog){}

  canActivate(){
    if(this.auth.checkLogin()){
      return true;
    }

      let refDialog = this.dialog.open(ErrorComponent,{data:"Vous n'avez acces veuillez vous connecter"})
      refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
    
      this.router.navigate(['/login']);

    return false;
    
  }
  
}