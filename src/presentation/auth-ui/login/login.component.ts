import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';
import { ErrorComponent } from 'src/presentation/dialog/error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  state=false;

  constructor(private router:Router, private auth:UserLoginUseCase, private dialog:MatDialog){

  }
  
  ngOnInit(): void {
      
  }

  goTo(){
   this.router.navigate(['/register']);
  }

  login(email:any, password:any){

    this.state = true;

    if(!email){
      let refDialog = this.dialog.open(ErrorComponent,{data:"Veuillez introduire le nom d'utilisateur"});
      this.state = false;
      refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
    }else if(!password){
      let refDialog = this.dialog.open(ErrorComponent,{data:'Veuillez introduire le mot de passe'});
      this.state = false;
      refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
    }else{
      this.auth.execute({email,password}).subscribe((res)=>{
        localStorage.setItem('token',res.accessToken)
        this.router.navigate(['/dashboard'])
        this.state = false;
          }, (err:HttpErrorResponse) => {
            let refDialog = this.dialog.open(ErrorComponent,{data:err.error.message});
            this.state = false;
            refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
        }
      )
    }
    
  }
}
