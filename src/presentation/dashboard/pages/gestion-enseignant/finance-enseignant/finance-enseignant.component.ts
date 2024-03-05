import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-finance-enseignant',
  templateUrl: './finance-enseignant.component.html',
  styleUrls: ['./finance-enseignant.component.css']
})
export class FinanceEnseignantComponent implements OnInit{

  displayedColumns: string[] = ['id', 'noms', 'montant', 'motif', 'date', 'actions'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public financeForm: FormGroup;
  public updatefinanceForm: FormGroup;

  finance:any;
  enseignantGet:any;
  idFinance:any;

  constructor(private auth:AuthService, private dialog:MatDialog, 
     public formBuilder: FormBuilder,
    ){
      this.financeForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        montant: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
      });

      this.updatefinanceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        montant: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
      });
  }

  ngOnInit(): void {
      this.readData();
  }

  readData(){
    
  }

  logout(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous vous de connecter?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.auth.logout();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getDataById(id:any){

    this.idFinance = id;
 
  }

  updateData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous modifier cette information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        
      }
    })
  }
  

  addData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous ajouter une information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        
      }
    })
  }

  deleteData(id:any){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous supprimer cette information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        
      }
    })
  }

}

