import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as e from 'express';
import { AuthService } from 'src/domain/usecases/auth';
import { UserLoginUseCase } from 'src/domain/usecases/user/user-login.usecase';
import { ErrorComponent } from 'src/presentation/dialog/error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  state=false;

  constructor(private router:Router, private auth:AuthService, private dialog:MatDialog){

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
      this.auth.login(email, password);
      this.state = false;
    }
    
  }
}
