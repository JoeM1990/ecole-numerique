import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private auth:AuthService, private dialog:MatDialog){}

  ngOnInit(): void {
      
  }

  logout(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous vous de connecter?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.auth.logout();
      }
    })
  }
}
