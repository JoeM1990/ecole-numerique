import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/domain/usecases/auth';
import { ReadFinanceByNameUseCase } from 'src/domain/usecases/finance/read-financeByName.usecase';
import { ReadPresenceByNameUseCase } from 'src/domain/usecases/presence/read-presenceByName.usecase';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-paye-enseignant',
  templateUrl: './paye-enseignant.component.html',
  styleUrls: ['./paye-enseignant.component.css']
})
export class PayeEnseignantComponent implements OnInit{

  displayedColumns: string[] = ['id', 'noms', 'salaireBase', 'detteCDF', 'detteUSD', 'presence', 'netapayer', 'actions'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataPaye: any[]=[];

  salaire:any;
  presence:any;
  detteCDF:any;
  detteUSD:any;
  netpaye:any;


  constructor(private auth:AuthService, private dialog:MatDialog, 
    private getFinance:ReadFinanceByNameUseCase,
    private getPresence:ReadPresenceByNameUseCase,
    ){
      
  }

  ngOnInit(): void {
    
  }

  getEnseignant(){
    
  }

  readData(){
    this.dataPaye.forEach(res=>{
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

