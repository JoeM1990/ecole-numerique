import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/domain/usecases/auth';
import { ReadEnseignantUseCase } from 'src/domain/usecases/enseignant/read-enseignant.usecase';
import { CreateFinanceUseCase } from 'src/domain/usecases/finance/create-finance.usecase';
import { DeleteFinanceByIdUseCase } from 'src/domain/usecases/finance/delete-presenceById.usecase';
import { ReadFinanceUseCase } from 'src/domain/usecases/finance/read-finance.usecase';
import { ReadFinanceByIdUseCase } from 'src/domain/usecases/finance/read-financeById.usecase';
import { UpdateFinanceUseCase } from 'src/domain/usecases/finance/update-finance.usecase';
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
     public formBuilder: FormBuilder, private create:CreateFinanceUseCase, private read:ReadFinanceUseCase,
     private getEns:ReadEnseignantUseCase, private readById:ReadFinanceByIdUseCase, private update:UpdateFinanceUseCase,
     private deleteD:DeleteFinanceByIdUseCase
    ){
      this.financeForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        montant: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        categorie: 'enseignant'
      });

      this.updatefinanceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        montant: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        categorie: 'enseignant'
      });
  }

  ngOnInit(): void {
    this.getEnseignant();
      this.readData();
  }

  getEnseignant(){
    this.getEns.execute().subscribe(res=>{
      this.enseignantGet = res;
    })
  }

  readData(){
    this.read.execute().subscribe(res=>{
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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
    this.readById.execute(id).subscribe(res=>{
      this.updatefinanceForm = this.formBuilder.group({
        id:res.id,
        noms: res.noms,
        montant: res.montant,
        motif: res.motif,
        date: res.date,
        categorie: res.categorie
      });
    })
  }

  updateData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous modifier cette information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.update.execute(this.updatefinanceForm.value).subscribe(res=>{
          this.readData();
        })
      }
    })
  }
  

  addData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous ajouter une information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.create.execute(this.financeForm.value).subscribe(res=>{
          this.readData();
        })
      }
    })
  }

  deleteData(id:any){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous supprimer cette information?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.deleteD.execute(id).subscribe(res=>{
          this.readData();
        })
      }
    })
  }

}

