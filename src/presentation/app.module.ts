import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { GestionEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/gestion-enseignant.component';
import { PresenceEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/presence-enseignant/presence-enseignant.component';
import { FinanceEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/finance-enseignant/finance-enseignant.component';
import { PayeEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/paye-enseignant/paye-enseignant.component';
import { ImpressionEnseignantComponent } from './presentation/dashboard/pages/gestion-enseignant/impression-enseignant/impression-enseignant.component';
import { GestionElevesComponent } from './presentation/dashboard/pages/gestion-eleves/gestion-eleves.component';
import { FinanceElevesComponent } from './presentation/dashboard/pages/gestion-eleves/finance-eleves/finance-eleves.component';
import { ImpressionElevesComponent } from './presentation/dashboard/pages/gestion-eleves/impression-eleves/impression-eleves.component';
import { GestionOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/gestion-ouvrier.component';
import { PresenceOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/presence-ouvrier/presence-ouvrier.component';
import { FinanceOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/finance-ouvrier/finance-ouvrier.component';
import { PayeOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/paye-ouvrier/paye-ouvrier.component';
import { ImpressionOuvrierComponent } from './presentation/dashboard/pages/gestion-ouvrier/impression-ouvrier/impression-ouvrier.component';
import { ParametreComponent } from './presentation/dashboard/pages/parametre/parametre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ParametreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
