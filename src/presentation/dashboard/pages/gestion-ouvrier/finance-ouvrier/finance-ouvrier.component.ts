import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-finance-ouvrier',
  templateUrl: './finance-ouvrier.component.html',
  styleUrls: ['./finance-ouvrier.component.css']
})
export class FinanceOuvrierComponent implements OnInit{

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

