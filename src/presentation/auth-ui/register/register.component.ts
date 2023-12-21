import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterUseCase } from 'src/domain/usecases/user-register.usecase';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/presentation/dialog/error/error.component';
import { SuccessComponent } from 'src/presentation/dialog/success/success.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;
  state = false;
  
  constructor(private router:Router, private auth:UserRegisterUseCase,
    public formBuilder: FormBuilder, private dialog:MatDialog){
      this.registerForm = this.formBuilder.group({
        username: ['', [Validators.required], ],
        email: ['', [Validators.required], ],
        password: ['', [Validators.required], ],
        role: 'user',
        status: 'actif',
      });
  }

  ngOnInit(): void {
      
  }
  
  goTo(){
   this.router.navigate(['/login']);
  }

  register(){
    this.state = true;

    if(this.registerForm.valid){
      this.auth.execute(this.registerForm.value).subscribe((res)=>{
        let refDialog = this.dialog.open(SuccessComponent,{data:'Votre compte a été créé avec succès'})
        this.state = false;
        refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
        this.router.navigate(['/login'])
      }, (err:HttpErrorResponse) => {
        let refDialog = this.dialog.open(ErrorComponent,{data:err.error.message})
        this.state = false;
        refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
     }
    )
    }else{
      let refDialog = this.dialog.open(ErrorComponent,{data:'Formulaire vide ou mal remplis'})
      this.state = false;
      refDialog.afterOpened().subscribe(_ => {setTimeout(() => {refDialog.close();}, 1000)})
    }

    
    //console.log(this.registerForm.value)
  }
}
