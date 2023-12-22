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


 //const dataT = [{"nom":"nom 1","postnom":"postnom 1","prenom":"prenom 1","lieu":"lieu 1","date":"date 1","etat":"etat 1","sexe":"sexe 1","telephone":"telephone 1","adresse":"adresse 1","id":"1"},{"nom":"nom 2","postnom":"postnom 2","prenom":"prenom 2","lieu":"lieu 2","date":"date 2","etat":"etat 2","sexe":"sexe 2","telephone":"telephone 2","adresse":"adresse 2","id":"2"},{"nom":"nom 3","postnom":"postnom 3","prenom":"prenom 3","lieu":"lieu 3","date":"date 3","etat":"etat 3","sexe":"sexe 3","telephone":"telephone 3","adresse":"adresse 3","id":"3"},{"nom":"nom 4","postnom":"postnom 4","prenom":"prenom 4","lieu":"lieu 4","date":"date 4","etat":"etat 4","sexe":"sexe 4","telephone":"telephone 4","adresse":"adresse 4","id":"4"},{"nom":"nom 5","postnom":"postnom 5","prenom":"prenom 5","lieu":"lieu 5","date":"date 5","etat":"etat 5","sexe":"sexe 5","telephone":"telephone 5","adresse":"adresse 5","id":"5"},{"nom":"nom 6","postnom":"postnom 6","prenom":"prenom 6","lieu":"lieu 6","date":"date 6","etat":"etat 6","sexe":"sexe 6","telephone":"telephone 6","adresse":"adresse 6","id":"6"},{"nom":"nom 7","postnom":"postnom 7","prenom":"prenom 7","lieu":"lieu 7","date":"date 7","etat":"etat 7","sexe":"sexe 7","telephone":"telephone 7","adresse":"adresse 7","id":"7"},{"nom":"nom 8","postnom":"postnom 8","prenom":"prenom 8","lieu":"lieu 8","date":"date 8","etat":"etat 8","sexe":"sexe 8","telephone":"telephone 8","adresse":"adresse 8","id":"8"},{"nom":"nom 9","postnom":"postnom 9","prenom":"prenom 9","lieu":"lieu 9","date":"date 9","etat":"etat 9","sexe":"sexe 9","telephone":"telephone 9","adresse":"adresse 9","id":"9"},{"nom":"nom 10","postnom":"postnom 10","prenom":"prenom 10","lieu":"lieu 10","date":"date 10","etat":"etat 10","sexe":"sexe 10","telephone":"telephone 10","adresse":"adresse 10","id":"10"},{"nom":"nom 11","postnom":"postnom 11","prenom":"prenom 11","lieu":"lieu 11","date":"date 11","etat":"etat 11","sexe":"sexe 11","telephone":"telephone 11","adresse":"adresse 11","id":"11"},{"nom":"nom 12","postnom":"postnom 12","prenom":"prenom 12","lieu":"lieu 12","date":"date 12","etat":"etat 12","sexe":"sexe 12","telephone":"telephone 12","adresse":"adresse 12","id":"12"},{"nom":"nom 13","postnom":"postnom 13","prenom":"prenom 13","lieu":"lieu 13","date":"date 13","etat":"etat 13","sexe":"sexe 13","telephone":"telephone 13","adresse":"adresse 13","id":"13"},{"nom":"nom 14","postnom":"postnom 14","prenom":"prenom 14","lieu":"lieu 14","date":"date 14","etat":"etat 14","sexe":"sexe 14","telephone":"telephone 14","adresse":"adresse 14","id":"14"},{"nom":"nom 15","postnom":"postnom 15","prenom":"prenom 15","lieu":"lieu 15","date":"date 15","etat":"etat 15","sexe":"sexe 15","telephone":"telephone 15","adresse":"adresse 15","id":"15"},{"nom":"nom 16","postnom":"postnom 16","prenom":"prenom 16","lieu":"lieu 16","date":"date 16","etat":"etat 16","sexe":"sexe 16","telephone":"telephone 16","adresse":"adresse 16","id":"16"},{"nom":"nom 17","postnom":"postnom 17","prenom":"prenom 17","lieu":"lieu 17","date":"date 17","etat":"etat 17","sexe":"sexe 17","telephone":"telephone 17","adresse":"adresse 17","id":"17"},{"nom":"nom 18","postnom":"postnom 18","prenom":"prenom 18","lieu":"lieu 18","date":"date 18","etat":"etat 18","sexe":"sexe 18","telephone":"telephone 18","adresse":"adresse 18","id":"18"},{"nom":"nom 19","postnom":"postnom 19","prenom":"prenom 19","lieu":"lieu 19","date":"date 19","etat":"etat 19","sexe":"sexe 19","telephone":"telephone 19","adresse":"adresse 19","id":"19"},{"nom":"nom 20","postnom":"postnom 20","prenom":"prenom 20","lieu":"lieu 20","date":"date 20","etat":"etat 20","sexe":"sexe 20","telephone":"telephone 20","adresse":"adresse 20","id":"20"},{"nom":"nom 21","postnom":"postnom 21","prenom":"prenom 21","lieu":"lieu 21","date":"date 21","etat":"etat 21","sexe":"sexe 21","telephone":"telephone 21","adresse":"adresse 21","id":"21"},{"nom":"nom 22","postnom":"postnom 22","prenom":"prenom 22","lieu":"lieu 22","date":"date 22","etat":"etat 22","sexe":"sexe 22","telephone":"telephone 22","adresse":"adresse 22","id":"22"},{"nom":"nom 23","postnom":"postnom 23","prenom":"prenom 23","lieu":"lieu 23","date":"date 23","etat":"etat 23","sexe":"sexe 23","telephone":"telephone 23","adresse":"adresse 23","id":"23"},{"nom":"nom 24","postnom":"postnom 24","prenom":"prenom 24","lieu":"lieu 24","date":"date 24","etat":"etat 24","sexe":"sexe 24","telephone":"telephone 24","adresse":"adresse 24","id":"24"},{"nom":"nom 25","postnom":"postnom 25","prenom":"prenom 25","lieu":"lieu 25","date":"date 25","etat":"etat 25","sexe":"sexe 25","telephone":"telephone 25","adresse":"adresse 25","id":"25"},{"nom":"nom 26","postnom":"postnom 26","prenom":"prenom 26","lieu":"lieu 26","date":"date 26","etat":"etat 26","sexe":"sexe 26","telephone":"telephone 26","adresse":"adresse 26","id":"26"},{"nom":"nom 27","postnom":"postnom 27","prenom":"prenom 27","lieu":"lieu 27","date":"date 27","etat":"etat 27","sexe":"sexe 27","telephone":"telephone 27","adresse":"adresse 27","id":"27"},{"nom":"nom 28","postnom":"postnom 28","prenom":"prenom 28","lieu":"lieu 28","date":"date 28","etat":"etat 28","sexe":"sexe 28","telephone":"telephone 28","adresse":"adresse 28","id":"28"},{"nom":"nom 29","postnom":"postnom 29","prenom":"prenom 29","lieu":"lieu 29","date":"date 29","etat":"etat 29","sexe":"sexe 29","telephone":"telephone 29","adresse":"adresse 29","id":"29"},{"nom":"nom 30","postnom":"postnom 30","prenom":"prenom 30","lieu":"lieu 30","date":"date 30","etat":"etat 30","sexe":"sexe 30","telephone":"telephone 30","adresse":"adresse 30","id":"30"},{"nom":"nom 31","postnom":"postnom 31","prenom":"prenom 31","lieu":"lieu 31","date":"date 31","etat":"etat 31","sexe":"sexe 31","telephone":"telephone 31","adresse":"adresse 31","id":"31"},{"nom":"nom 32","postnom":"postnom 32","prenom":"prenom 32","lieu":"lieu 32","date":"date 32","etat":"etat 32","sexe":"sexe 32","telephone":"telephone 32","adresse":"adresse 32","id":"32"},{"nom":"nom 33","postnom":"postnom 33","prenom":"prenom 33","lieu":"lieu 33","date":"date 33","etat":"etat 33","sexe":"sexe 33","telephone":"telephone 33","adresse":"adresse 33","id":"33"}]

 const dataTT: any[] | undefined=[];

@Component({
  selector: 'app-gestion-enseignant',
  templateUrl: './gestion-enseignant.component.html',
  styleUrls: ['./gestion-enseignant.component.css']
})
export class GestionEnseignantComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'nom', 'postnom', 'prenom', 'lieu', 'date', 'etat', 'sexe', 'telephone', 'adresse'];
  dataSource!: MatTableDataSource<EnseignantEntity>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private auth:AuthService, private dialog:MatDialog, private crud:ReadEnseignantUseCase, private http:HttpClient){
  }

  ngOnInit(): void {

      this.crud.execute().subscribe(res=>{
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


