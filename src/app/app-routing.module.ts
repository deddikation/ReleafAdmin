import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AddComponent} from '../app/components/company/add/add.component';
import { EditComponent} from '../app/components/company/edit/edit.component';


const routes: Routes = 
[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'addCompany', component:AddComponent},
  {path: 'editCompany', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
