import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PresenceEntity } from 'src/data/repositories/presence/entities/presence-entity';
import { AuthService } from 'src/domain/usecases/auth';
import { CreatePresenceUseCase } from 'src/domain/usecases/presence/create-presence.usecase';
import { DeletePresenceByIdUseCase } from 'src/domain/usecases/presence/delete-presenceById.usecase';
import { ReadEnseignantUseCase } from 'src/domain/usecases/enseignant/read-enseignant.usecase';
import { ReadPresenceByIdUseCase } from 'src/domain/usecases/presence/read-presenceById.usecase';
import { ReadPresenceByNameUseCase } from 'src/domain/usecases/presence/read-presenceByName.usecase';
import { UpdatePresenceUseCase } from 'src/domain/usecases/presence/update-presence.usecase';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';


@Component({
  selector: 'app-presence-enseignant',
  templateUrl: './presence-enseignant.component.html',
  styleUrls: ['./presence-enseignant.component.css']
})
export class PresenceEnseignantComponent implements OnInit{

  displayedColumns: string[] = ['id', 'noms', 'date' , 'heureA', 'heureS','actions'];
  dataSource!: MatTableDataSource<PresenceEntity>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public presenceForm: FormGroup;
  public updatepresenceForm: FormGroup;

  presence:any;
  presenceGet:any;
  idPresence:any;
  enseignantGet:any;

  constructor(private auth:AuthService, private dialog:MatDialog, 
    private read:ReadEnseignantUseCase, public formBuilder: FormBuilder, private create:CreatePresenceUseCase,
    private readPresence:ReadPresenceByNameUseCase, private getById:ReadPresenceByIdUseCase, private update:UpdatePresenceUseCase, 
    private deleteD:DeletePresenceByIdUseCase
    ){
      this.presenceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        heureA: ['', [Validators.required], ],
        heureS: ['', [Validators.required], ],
        categorie: 'enseignant'
      });

      this.updatepresenceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        heureA: ['', [Validators.required], ],
        heureS: ['', [Validators.required], ],
        categorie: 'enseignant'
      });
  }

  ngOnInit(): void {
      this.readDataEnseignant();
      this.readData();
  }

  readDataEnseignant(){
    this.read.execute().subscribe(res=>{
      this.enseignantGet = res;
      // console.log(res);
    })

  }

  readData(){
    this.readPresence.execute('enseignant').subscribe(res=>{
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      console.log(res);
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

    this.idPresence = id;

    this.getById.execute(id).subscribe(res=>{
      this.updatepresenceForm = this.formBuilder.group({
        id:res.id,
        noms: res.noms,
        date: res.date,
        heureA: res.heureA,
        heureS: res.heureS,
        categorie: res.categorie
      });
    })
    
  }

  updateData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous modifier cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.update.execute(this.updatepresenceForm.value).subscribe(res=>{
          this.readData();
        })
      }
    })
  }
  

  addData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous ajouter cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
          this.create.execute(this.presenceForm.value).subscribe(res=>{
            this.readData()
          })
          // console.log(this.presenceForm.value)
      }
    })
  }

  deleteData(id:any){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous supprimer cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        this.deleteD.execute(id).subscribe(res=>{
          this.readData();
        })
      }
    })
  }
}
