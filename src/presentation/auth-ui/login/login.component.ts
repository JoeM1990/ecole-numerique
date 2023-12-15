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

  state=false;

  constructor(private router:Router, private auth:UserLoginUseCase){

  }
  
  ngOnInit(): void {
      
  }

  goTo(){
   this.router.navigate(['/register']);
  }

  login(email:any, password:any){

    this.state = true;

    if(!email){
      console.log('Veuillez introduire le nom d utilisateur');
      this.state = false;
    }else if(!password){
      console.log('Veuillez introduire le mot de passe');
      this.state = false;
    }else{
      this.auth.execute({email,password}).subscribe((res)=>{
        console.log(res.accessToken);
        this.state = false;
          }, (err:HttpErrorResponse) => {
            console.log(err.error.message);
            this.state = false;
        }
      )
    }
    
  }
}
