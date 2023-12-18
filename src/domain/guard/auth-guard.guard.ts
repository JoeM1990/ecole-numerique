import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "../usecases/AuthService";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return inject(AuthService).checkLogin()
    ? true
    : inject(AuthService).redirect()

};