import { HttpErrorResponse } from '@angular/common/http';
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

  login(email:any, password:any){
    this.auth.execute({email,password}).subscribe((res)=>{
      console.log(res)
    }, (err:HttpErrorResponse) => {
      console.log(err.error.message)
   }
    )
  }
}
