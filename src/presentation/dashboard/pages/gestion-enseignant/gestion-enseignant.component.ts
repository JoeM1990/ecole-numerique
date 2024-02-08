import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReadEnseignantUseCase } from 'src/domain/usecases/read-enseignant.usecase';
import { EnseignantEntity } from 'src/data/repositories/enseignant/entities/enseignant-entity';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-enseignant',
  templateUrl: './gestion-enseignant.component.html',
  styleUrls: ['./gestion-enseignant.component.css']
})
export class GestionEnseignantComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nom', 'postnom', 'prenom', 'lieu', 'date', 'etat', 'sexe', 'telephone', 'adresse', 'actions'];
  dataSource!: MatTableDataSource<EnseignantEntity>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private auth:AuthService, private dialog:MatDialog, 
    private crudRead:ReadEnseignantUseCase, private http:HttpClient, public formBuilder: FormBuilder, ){
  }

  ngOnInit(): void {

      this.crudRead.execute().subscribe(res=>{
        console.log(res)
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


  updateData(){

  }

  addData(){

  }
}


