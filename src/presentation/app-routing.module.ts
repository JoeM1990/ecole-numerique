import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionEnseignantComponent } from './dashboard/pages/gestion-enseignant/gestion-enseignant.component';
import { PresenceEnseignantComponent } from './dashboard/pages/gestion-enseignant/presence-enseignant/presence-enseignant.component';
import { PayeEnseignantComponent } from './dashboard/pages/gestion-enseignant/paye-enseignant/paye-enseignant.component';
import { FinanceEnseignantComponent } from './dashboard/pages/gestion-enseignant/finance-enseignant/finance-enseignant.component';
import { ImpressionEnseignantComponent } from './dashboard/pages/gestion-enseignant/impression-enseignant/impression-enseignant.component';
import { GestionElevesComponent } from './dashboard/pages/gestion-eleves/gestion-eleves.component';
import { FinanceElevesComponent } from './dashboard/pages/gestion-eleves/finance-eleves/finance-eleves.component';
import { ImpressionElevesComponent } from './dashboard/pages/gestion-eleves/impression-eleves/impression-eleves.component';
import { GestionOuvrierComponent } from './dashboard/pages/gestion-ouvrier/gestion-ouvrier.component';
import { PresenceOuvrierComponent } from './dashboard/pages/gestion-ouvrier/presence-ouvrier/presence-ouvrier.component';
import { PayeOuvrierComponent } from './dashboard/pages/gestion-ouvrier/paye-ouvrier/paye-ouvrier.component';
import { FinanceOuvrierComponent } from './dashboard/pages/gestion-ouvrier/finance-ouvrier/finance-ouvrier.component';
import { ImpressionOuvrierComponent } from './dashboard/pages/gestion-ouvrier/impression-ouvrier/impression-ouvrier.component';
import { ParametreComponent } from './dashboard/pages/parametre/parametre.component';
import { LoginComponent } from './auth-ui/login/login.component';
import { RegisterComponent } from './auth-ui/register/register.component';
import { AuthGuard } from 'src/domain/guard/auth-guard.guard';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-enseignant', component:GestionEnseignantComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-enseignant/presence', component:PresenceEnseignantComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-enseignant/paye', component:PayeEnseignantComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-enseignant/finance', component:FinanceEnseignantComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-enseignant/impression', component:ImpressionEnseignantComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-eleves', component:GestionElevesComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-eleves/finance', component:FinanceElevesComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-eleves/impression', component:ImpressionElevesComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-ouvrier', component:GestionOuvrierComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-ouvrier/presence', component:PresenceOuvrierComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-ouvrier/paye', component:PayeOuvrierComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-ouvrier/finance', component:FinanceOuvrierComponent, canActivate:[AuthGuard]},
  {path:'dashboard/gestion-ouvrier/impression', component:ImpressionOuvrierComponent, canActivate:[AuthGuard]},
  {path:'dashboard/parametre', component:ParametreComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
