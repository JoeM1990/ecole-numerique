import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router, private auth:UserLoginUseCase){

  }
  
  ngOnInit(): void {
      
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
