import { Injectable } from '@angular/core';
import { UserImplementationRepository } from '../../data/repositories/user/user-implementation.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:UserImplementationRepository) { }

  login(email:any,password:any){
    this.auth.login({email,password}).subscribe(e=>{
      console.log(e.accesstoken);
    })
  }


}
