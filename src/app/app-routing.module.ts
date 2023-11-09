import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'dashboard'},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
