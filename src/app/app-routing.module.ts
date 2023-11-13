import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { GestionEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/gestion-enseignant.component';
import { PresenceEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/presence-enseignant/presence-enseignant.component';
import { PayeEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/paye-enseignant/paye-enseignant.component';
import { FinanceEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/finance-enseignant/finance-enseignant.component';
import { ImpressionEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/impression-enseignant/impression-enseignant.component';
import { GestionElevesComponent } from './presentation/dashboard/pages/gestion-eleves/gestion-eleves.component';
import { FinanceElevesComponent } from './presentation/dashboard/pages/gestion-eleves/finance-eleves/finance-eleves.component';
import { ImpressionElevesComponent } from './presentation/dashboard/pages/gestion-eleves/impression-eleves/impression-eleves.component';
import { GestionOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/gestion-ouvrier.component';
import { PresenceOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/presence-ouvrier/presence-ouvrier.component';
import { PayeOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/paye-ouvrier/paye-ouvrier.component';
import { FinanceOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/finance-ouvrier/finance-ouvrier.component';
import { ImpressionOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/impression-ouvrier/impression-ouvrier.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'dashboard'},
  {path:'dashboard', component:DashboardComponent,},
  {path:'dashboard/gestion-enseignant', component:GestionEnseignantComponent,},
  {path:'dashboard/gestion-enseignant/presence', component:PresenceEnseignantComponent},
  {path:'dashboard/gestion-enseignant/paye', component:PayeEnseignantComponent},
  {path:'dashboard/gestion-enseignant/finance', component:FinanceEnseignantComponent},
  {path:'dashboard/gestion-enseignant/impression', component:ImpressionEnseignantComponent},
  {path:'dashboard/gestion-eleves', component:GestionElevesComponent},
  {path:'dashboard/gestion-eleves/finance', component:FinanceElevesComponent},
  {path:'dashboard/gestion-eleves/impression', component:ImpressionElevesComponent},
  {path:'dashboard/gestion-ouvrier', component:GestionOuvrierComponent},
  {path:'dashboard/gestion-ouvrier/presence', component:PresenceOuvrierComponent},
  {path:'dashboard/gestion-ouvrier/paye', component:PayeOuvrierComponent},
  {path:'dashboard/gestion-ouvrier/finance', component:FinanceOuvrierComponent},
  {path:'dashboard/gestion-ouvrier/impression', component:ImpressionOuvrierComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
