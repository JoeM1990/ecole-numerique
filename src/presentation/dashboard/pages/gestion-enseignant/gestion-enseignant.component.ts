import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/domain/usecases/auth';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReadEnseignantUseCase } from 'src/domain/usecases/read-enseignant.usecase';
import { ReadEnseignantByIdUseCase } from 'src/domain/usecases/get-enseignant-byId.usecase';
import { EnseignantEntity } from 'src/data/repositories/enseignant/entities/enseignant-entity';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateEnseignantUseCase } from 'src/domain/usecases/create-enseignant.usecase';
import { ErrorComponent } from 'src/presentation/dialog/error/error.component';

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

  public enseignantForm: FormGroup;
  public updateenseignantForm: FormGroup;

  enseignant:any;
  enseignantGet:any;

  constructor(private auth:AuthService, private dialog:MatDialog, 
    private read:ReadEnseignantUseCase, private http:HttpClient, public formBuilder: FormBuilder,
    private create:CreateEnseignantUseCase
    ){
      this.enseignantForm = this.formBuilder.group({
        id:null,
        nom: ['', [Validators.required], ],
        postnom: ['', [Validators.required], ],
        prenom: ['', [Validators.required], ],
        lieu: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        etat: ['', [Validators.required], ],
        sexe: ['', [Validators.required], ],
        telephone: ['', [Validators.required], ],
        adresse: ['', [Validators.required], ],
      });

      this.updateenseignantForm = this.formBuilder.group({
        nom: ['', [Validators.required], ],
        postnom: ['', [Validators.required], ],
        prenom: ['', [Validators.required], ],
        lieu: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        etat: ['', [Validators.required], ],
        sexe: ['', [Validators.required], ],
        telephone: ['', [Validators.required], ],
        adresse: ['', [Validators.required], ],
      });
  }

  ngOnInit(): void {
      this.readData();
  }

  readData(){
    this.read.execute().subscribe(res=>{
      // console.log(res)
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

  }

  addData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous ajouter un enseignant?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
          this.create.execute(this.enseignantForm.value).subscribe(val=>{
            console.log(val);
          });
          //onsole.log(this.enseignantForm.value)
      }
    })
  }
}


