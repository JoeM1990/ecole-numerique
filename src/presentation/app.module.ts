import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionEnseignantComponent } from './dashboard/pages/gestion-enseignant/gestion-enseignant.component';
import { PresenceEnseignantComponent } from './dashboard/pages/gestion-enseignant/presence-enseignant/presence-enseignant.component';
import { FinanceEnseignantComponent } from './dashboard/pages/gestion-enseignant/finance-enseignant/finance-enseignant.component';
import { PayeEnseignantComponent } from './dashboard/pages/gestion-enseignant/paye-enseignant/paye-enseignant.component';
import { ImpressionEnseignantComponent } from './dashboard/pages/gestion-enseignant/impression-enseignant/impression-enseignant.component';
import { GestionElevesComponent } from './dashboard/pages/gestion-eleves/gestion-eleves.component';
import { FinanceElevesComponent } from './dashboard/pages/gestion-eleves/finance-eleves/finance-eleves.component';
import { ImpressionElevesComponent } from './dashboard/pages/gestion-eleves/impression-eleves/impression-eleves.component';
import { GestionOuvrierComponent } from './dashboard/pages/gestion-ouvrier/gestion-ouvrier.component';
import { PresenceOuvrierComponent } from './dashboard/pages/gestion-ouvrier/presence-ouvrier/presence-ouvrier.component';
import { FinanceOuvrierComponent } from './dashboard/pages/gestion-ouvrier/finance-ouvrier/finance-ouvrier.component';
import { PayeOuvrierComponent } from './dashboard/pages/gestion-ouvrier/paye-ouvrier/paye-ouvrier.component';
import { ImpressionOuvrierComponent } from './dashboard/pages/gestion-ouvrier/impression-ouvrier/impression-ouvrier.component';
import { ParametreComponent } from './dashboard/pages/parametre/parametre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataModule } from 'src/data/data.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth-ui/login/login.component';
import { RegisterComponent } from './auth-ui/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorComponent } from './dialog/error/error.component';
import { SuccessComponent } from './dialog/success/success.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { WaitingComponent } from './dialog/waiting/waiting.component';
import { AuthGuard } from 'src/domain/guard/auth-guard.guard';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GestionEnseignantComponent,
    PresenceEnseignantComponent,
    FinanceEnseignantComponent,
    PayeEnseignantComponent,
    ImpressionEnseignantComponent,
    GestionElevesComponent,
    FinanceElevesComponent,
    ImpressionElevesComponent,
    GestionOuvrierComponent,
    PresenceOuvrierComponent,
    FinanceOuvrierComponent,
    PayeOuvrierComponent,
    ImpressionOuvrierComponent,
    ParametreComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationComponent,
    SuccessComponent,
    ErrorComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
