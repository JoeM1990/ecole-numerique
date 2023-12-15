import { Router } from "@angular/router";

export class Auth {

    constructor(private router:Router) { }

    checkLogin(){
        return !! localStorage.getItem('token');
      }
  
  
    logout(){
        localStorage.removeItem('token')
        this.router.navigate(['/login']);
        return 'dk';
      }


}
