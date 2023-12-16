import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanActivateFn, CanLoad, Router } from '@angular/router';
import {UserLoginUseCase} from '../usecases/user-login.usecase'
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../presentation/dialog/error/error.component';
import {Auth} from '../usecases/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad  {

  constructor(private authService: Auth, private router: Router, private dialog:MatDialog) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      let refDialog = this.dialog.open(ErrorComponent,{data:"Vous n'avez pas acces a ce systeme"})
      refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
      this.router.navigate(['/login']);
      return false;
    }
  }

}