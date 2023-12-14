import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterUseCase } from 'src/domain/usecases/user-register.usecase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;
  
  constructor(private router:Router, private auth:UserRegisterUseCase,
    public formBuilder: FormBuilder){
      this.registerForm = this.formBuilder.group({
        id:null,
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
    this.auth.execute(this.registerForm.value)
  }
}
