import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/domain/usecases/auth';
import { ReadEnseignantUseCase } from 'src/domain/usecases/read-enseignant.usecase';
import { ConfirmationComponent } from 'src/presentation/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-presence-enseignant',
  templateUrl: './presence-enseignant.component.html',
  styleUrls: ['./presence-enseignant.component.css']
})
export class PresenceEnseignantComponent implements OnInit{

  displayedColumns: string[] = ['id', 'noms', 'date' , 'heureA', 'heureS','actions'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public presenceForm: FormGroup;
  public updatepresenceForm: FormGroup;

  presence:any;
  presenceGet:any;
  idPresence:any;
  enseignantGet:any;

  constructor(private auth:AuthService, private dialog:MatDialog, 
    private read:ReadEnseignantUseCase, public formBuilder: FormBuilder,
    ){
      this.presenceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        heureA: ['', [Validators.required], ],
        heureS: ['', [Validators.required], ],
      });

      this.updatepresenceForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
        heureA: ['', [Validators.required], ],
        heureS: ['', [Validators.required], ],
      });
  }

  ngOnInit(): void {
      this.readDataEnseignant();
  }

  readDataEnseignant(){
    this.read.execute().subscribe(res=>{
      this.enseignantGet = res;
    })

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

    this.idPresence = id;

    
  }

  updateData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous modifier cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        
      }
    })
  }
  

  addData(){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous ajouter cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
          
      }
    })
  }

  deleteData(id:any){
    let refDialog = this.dialog.open(ConfirmationComponent, {data:'Voulez-vous supprimer cette presence ?'});
    refDialog.afterClosed().subscribe(res=>{
      if(res == 'true'){
        
      }
    })
  }
}
