import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReadEnseignantUseCase } from 'src/domain/usecases/read-enseignant.usecase';
import { EnseignantEntity } from 'src/data/repositories/enseignant/entities/enseignant-entity';
import { EnseignantModel } from 'src/domain/models/enseignant.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gestion-enseignant',
  templateUrl: './gestion-enseignant.component.html',
  styleUrls: ['./gestion-enseignant.component.css']
})
export class GestionEnseignantComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'nom', 'postnom', 'prenom', 'lieu', 'date', 'etat', 'sexe', 'telephone', 'adresse'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  enseignant:EnseignantEntity[]=[];

  constructor(private auth:AuthService, private dialog:MatDialog, private crud:ReadEnseignantUseCase, private http:HttpClient){
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
      this.crud.execute().subscribe((res)=>{
        console.log(res)
        //this.dataSource = new MatTableDataSource(res)
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
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

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }

