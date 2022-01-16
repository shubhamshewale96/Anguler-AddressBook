import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';

const routes: Routes = [
{ path: 'persons', component: DashboardComponent },
{ path: '', redirectTo: 'persons', pathMatch: 'full' },
{ path: 'add-person', component: AddPersonComponent },
{ path: 'update-person/:id', component: UpdatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
