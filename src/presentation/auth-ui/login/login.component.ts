import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router:Router){

  }
  
  goTo(){
   this.router.navigate(['/register']);
  }

  login(){
    // this.auth.login({email,password}).subscribe(e=>{
    //   console.log(e.accesstoken);
    // })
  }
}
